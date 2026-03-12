# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# --- NUEVO: Instalar Node.js y npm para el Director de UX ---
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    rm -rf /var/lib/apt/lists/*
# ------------------------------------------------------------

# Copy requirements file (Ensure this is in the same directory as Dockerfile)
COPY requirements.txt .

# Install dependencies without cache
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY main.py .

# Optional Step for security: Create a non-root user
RUN adduser --disabled-password --gecos '' sandboxuser && chown -R sandboxuser /app
USER sandboxuser

# Command to run the FastAPI app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]