// Servicios, Agentes, Proceso, Partners, Status, Contacto, NotFound
// All as stub pages — to be built out one by one

const ComingSoon = ({ title, route }) => (
  <section style={{
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '140px 60px 80px',
  }}>
    <p style={{
      fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.68rem',
      letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)',
      marginBottom: '20px',
    }}>
      {route}
    </p>
    <h1 style={{
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.95,
    }}>
      {title}<br />
      <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>en construcción.</em>
    </h1>
    <p style={{ marginTop: '32px', fontSize: '0.95rem', color: 'var(--white-dim)', maxWidth: '400px', lineHeight: 1.7 }}>
      Esta página está siendo construida por la fábrica. Mientras tanto, podés escribirnos directamente.
    </p>
    <div style={{ marginTop: '40px' }}>
      <a
        href="https://wa.me/542616615176?text=Hola%2C%20me%20interesa%20Vant%20Hub."
        target="_blank" rel="noopener noreferrer"
        style={{
          fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          background: 'var(--gold)', color: 'var(--black)',
          padding: '15px 36px', textDecoration: 'none', fontWeight: 600,
        }}
      >
        Escribir por WhatsApp
      </a>
    </div>
  </section>
)

export function Servicios() { return <ComingSoon title="Servicios" route="/servicios" /> }
export function Agentes() { return <ComingSoon title="Agentes IA" route="/agentes" /> }
export function Proceso() { return <ComingSoon title="Cómo funciona" route="/proceso" /> }
export function Partners() { return <ComingSoon title="Partners" route="/partners" /> }
export function Status() { return <ComingSoon title="Status" route="/status" /> }
export function Contacto() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '140px 60px 80px',
    }}>
      <p style={{
        fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.68rem',
        letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)',
        marginBottom: '20px',
      }}>Contacto</p>
      <h1 style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.95,
        marginBottom: '48px',
      }}>
        Hablemos<br />
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>sin filtros.</em>
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '900px' }}>
        <div>
          {[
            { label: 'WhatsApp', value: '+54 261 661-5176', href: 'https://wa.me/542616615176' },
            { label: 'Ubicación', value: 'Mendoza, Argentina', href: null },
            { label: 'Onboarding', value: 'Formulario de Tally →', href: 'https://tally.so/r/yPDJ9W' },
          ].map(({ label, value, href }) => (
            <div key={label} style={{ marginBottom: '32px' }}>
              <div style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>{label}</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--white-dim)' }}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', textDecoration: 'none' }}>{value}</a>
                ) : value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', fontWeight: 300, marginBottom: '8px' }}>Dos caminos para arrancar</div>
          <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', lineHeight: 1.7, marginBottom: '24px' }}>
            Si ya sabés lo que necesitás, completá el formulario. Si tenés dudas, escribinos por WhatsApp y lo resolvemos en minutos.
          </p>
          <a
            href="https://tally.so/r/yPDJ9W"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              background: 'var(--gold)', color: 'var(--black)',
              padding: '15px 36px', textDecoration: 'none', fontWeight: 600,
              display: 'inline-block', textAlign: 'center',
            }}
          >
            Formulario de onboarding →
          </a>
          <a
            href="https://wa.me/542616615176?text=Hola%2C%20me%20interesa%20Vant%20Hub.%20Quiero%20saber%20m%C3%A1s."
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              background: '#25D366', color: 'var(--black)',
              padding: '15px 36px', textDecoration: 'none', fontWeight: 600,
              display: 'inline-block', textAlign: 'center',
            }}
          >
            Escribir por WhatsApp
          </a>
          <p style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white-dim)' }}>
            Respuesta en menos de 48 horas hábiles
          </p>
        </div>
      </div>
    </section>
  )
}

export function NotFound() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '140px 60px 80px',
    }}>
      <p style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>404</p>
      <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.95, marginBottom: '32px' }}>
        Esta página<br />
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>no existe.</em>
      </h1>
      <a href="/" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--black)', padding: '15px 36px', textDecoration: 'none', fontWeight: 600, display: 'inline-block', width: 'fit-content' }}>
        Volver al inicio
      </a>
    </section>
  )
}

export default { Servicios, Agentes, Proceso, Partners, Status, Contacto, NotFound }
