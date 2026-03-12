from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import subprocess
import tempfile
import os
import sys

app = FastAPI(title="Project Zero: Python & Node Sandbox API", version="2.0.0")

class CodeExecutionRequest(BaseModel):
    code: str
    timeout_seconds: int = 15

class CodeExecutionResponse(BaseModel):
    stdout: str
    stderr: str
    exit_code: int

# ==========================================
# 🐍 ENDPOINT DEL DIRECTOR DE LÓGICA (PYTHON)
# ==========================================
@app.post("/run-python", response_model=CodeExecutionResponse)
async def run_python_code(request: CodeExecutionRequest):
    """
    Recibe un script de Python en texto plano, lo ejecuta en un entorno aislado temporal
    y devuelve la salida estandar, los errores y el codigo de salida.
    """
    if not request.code.strip():
        raise HTTPException(status_code=400, detail="El código no puede estar vacío.")

    with tempfile.NamedTemporaryFile(mode="w+", encoding="utf-8", suffix=".py", delete=False) as temp_script:
        temp_script.write(request.code)
        temp_script_path = temp_script.name

    try:
        result = subprocess.run(
            [sys.executable, temp_script_path],
            capture_output=True,
            text=True,
            timeout=request.timeout_seconds
        )
        
        return CodeExecutionResponse(
            stdout=result.stdout,
            stderr=result.stderr,
            exit_code=result.returncode
        )

    except subprocess.TimeoutExpired as e:
        return CodeExecutionResponse(
            stdout=e.stdout.decode('utf-8') if e.stdout else "",
            stderr=f"TimeoutExpired: La ejecución superó el límite de {request.timeout_seconds} segundos.\n" + (e.stderr.decode('utf-8') if e.stderr else ""),
            exit_code=124 
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interno al ejecutar el Sandbox: {str(e)}")
    finally:
        if os.path.exists(temp_script_path):
            os.remove(temp_script_path)

# ==========================================
# ⚛️ ENDPOINT DEL DIRECTOR DE UX (NODE.JS)
# ==========================================
@app.post("/run-node", response_model=CodeExecutionResponse)
async def run_node_code(request: CodeExecutionRequest):
    """
    Recibe un script de JavaScript/Node, lo ejecuta y devuelve los resultados.
    Ideal para testear lógica de React, Tailwind o Vanilla JS.
    """
    if not request.code.strip():
        raise HTTPException(status_code=400, detail="El código no puede estar vacío.")

    with tempfile.NamedTemporaryFile(mode="w+", suffix=".js", delete=False) as temp_script:
        temp_script.write(request.code)
        temp_script_path = temp_script.name

    try:
        # Fíjate que acá llamamos a "node" en vez del ejecutable de Python
        result = subprocess.run(
            ["node", temp_script_path],
            capture_output=True,
            text=True,
            timeout=request.timeout_seconds
        )
        
        return CodeExecutionResponse(
            stdout=result.stdout,
            stderr=result.stderr,
            exit_code=result.returncode
        )

    except subprocess.TimeoutExpired as e:
        return CodeExecutionResponse(
            stdout=e.stdout.decode('utf-8') if e.stdout else "",
            stderr=f"TimeoutExpired: La ejecución superó el límite de {request.timeout_seconds} segundos.\n" + (e.stderr.decode('utf-8') if e.stderr else ""),
            exit_code=124 
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interno al ejecutar el Sandbox de UX: {str(e)}")
    finally:
        if os.path.exists(temp_script_path):
            os.remove(temp_script_path)
            
@app.get("/health")
async def health():
    return {"status": "ok"}
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)