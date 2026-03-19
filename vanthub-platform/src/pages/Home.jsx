import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const S = {
  section: { padding: '120px 60px' },
  sectionLabel: {
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '0.68rem',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
    fontWeight: 300,
    lineHeight: 1.05,
  },
}

function Marquee() {
  const items = [
    'Desarrollo Web', 'Automatización IA', 'Health Check Automático',
    'Deploy Continuo', 'Hosting Incluido', 'Protocolo de Seguridad',
    'Website as a Service', 'Onboarding en 48hs',
  ]
  const doubled = [...items, ...items]

  return (
    <div style={{
      borderTop: '1px solid var(--black-border)',
      borderBottom: '1px solid var(--black-border)',
      padding: '16px 0',
      overflow: 'hidden',
      background: 'var(--black-mid)',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marquee 22s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <div key={i} style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--white-dim)',
            padding: '0 40px',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}>
            {item}
            <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: '140px 60px 80px',
        overflow: 'hidden',
      }}>
        {/* Vertical gold line */}
        <div style={{
          position: 'absolute', top: 0, right: '18%',
          width: '1px', height: '100%',
          background: 'linear-gradient(to bottom, transparent, var(--gold-dim) 30%, var(--gold-dim) 70%, transparent)',
          opacity: 0.4,
        }} />

        <p style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontSize: '0.72rem', letterSpacing: '0.35em',
          textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '28px',
          opacity: 0, transform: 'translateY(20px)',
          animation: 'fadeUp 0.8s ease forwards 0.2s',
        }}>
          Agencia de Inteligencia Artificial — Mendoza, Argentina
        </p>

        <h1 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(4rem, 8vw, 9rem)',
          fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.01em',
          maxWidth: '780px',
          opacity: 0, transform: 'translateY(30px)',
          animation: 'fadeUp 0.9s ease forwards 0.4s',
        }}>
          Tu negocio en<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>digital,</em> operado<br />
          por IA.
        </h1>

        <p style={{
          marginTop: '40px', fontSize: '0.95rem', fontWeight: 300,
          color: 'var(--white-dim)', maxWidth: '460px', lineHeight: 1.7,
          opacity: 0, transform: 'translateY(20px)',
          animation: 'fadeUp 0.8s ease forwards 0.7s',
        }}>
          Desarrollamos, desplegamos y monitoreamos tu presencia digital.
          Vos cerrás el trato. Nosotros nos encargamos del resto.
        </p>

        <div style={{
          marginTop: '52px', display: 'flex', gap: '20px', alignItems: 'center',
          opacity: 0, transform: 'translateY(20px)',
          animation: 'fadeUp 0.8s ease forwards 0.9s',
        }}>
          <a
            href="https://tally.so/r/yPDJ9W"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '0.8rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', background: 'var(--gold)',
              color: 'var(--black)', padding: '15px 36px',
              textDecoration: 'none', fontWeight: 600,
              transition: 'background 0.2s, transform 0.2s', display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'none' }}
          >
            Iniciar proyecto
          </a>
          <Link
            to="/servicios"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '0.8rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--white-dim)',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
          >
            Ver servicios →
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          position: 'absolute', bottom: '60px', right: '60px',
          display: 'flex', gap: '48px',
          opacity: 0, animation: 'fadeUp 0.8s ease forwards 1.1s',
        }}>
          {[
            { num: '5', label: 'Días hábiles\nTier 1' },
            { num: '99%', label: 'SLA uptime\ngarantizado' },
            { num: '24/7', label: 'Monitoreo\nautomático' },
          ].map(({ num, label }) => (
            <div key={num} style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.4rem', fontWeight: 300,
                color: 'var(--gold)', lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '0.65rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--white-dim)', marginTop: '4px',
                whiteSpace: 'pre-line',
              }}>{label}</div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-stats { position: static !important; margin-top: 52px !important; justify-content: flex-start !important; }
          }
        `}</style>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* VALUE PROP */}
      <section id="modelo" style={S.section}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div className="reveal">
            <p style={S.sectionLabel}>Propuesta de Valor</p>
            <h2 style={S.sectionTitle}>
              No vendemos<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>sitios web.</em><br />
              Vendemos<br />tranquilidad.
            </h2>
            <p style={{ marginTop: '36px', fontSize: '1rem', lineHeight: 1.8, color: 'var(--white-dim)', maxWidth: '500px' }}>
              Vant Hub es una agencia semiautónoma impulsada por inteligencia artificial.
              Combinamos tecnología de punta con supervisión humana para entregar proyectos
              digitales de calidad, a velocidad real, con costos previsibles.
              <br /><br />
              Sin sorpresas. Sin presupuestos que se disparan. Sin "todavía falta un poco más".
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginTop: '16px' }}>
            {[
              { title: 'Velocidad real', text: 'Tu web en 5 días hábiles. Un equipo de IA trabaja en paralelo, sin fricción de agenda ni reuniones innecesarias.', delay: 'reveal-delay-1' },
              { title: 'Costo fijo y predecible', text: 'Setup único + retainer mensual. Sabés exactamente cuánto vas a pagar cada mes, sin variables ocultas.', delay: 'reveal-delay-2' },
              { title: 'Monitoreo 24/7 incluido', text: 'Health checks automáticos cada 5 minutos. Si algo se cae, te avisamos antes de que te enteres.', delay: 'reveal-delay-3' },
              { title: 'Aprobás todo antes de publicar', text: 'Pipeline de QA + aprobación humana obligatoria en cada entrega. El código no sale sin tu OK.', delay: 'reveal-delay-4' },
            ].map(({ title, text, delay }) => (
              <ValueItem key={title} title={title} text={text} className={`reveal ${delay}`} />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #modelo > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ ...S.section, background: 'var(--black-mid)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px' }} className="reveal">
          <div>
            <p style={S.sectionLabel}>Servicios</p>
            <h2 style={S.sectionTitle}>Dos planes.<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Sin letra chica.</em></h2>
          </div>
          <a
            href="https://tally.so/r/yPDJ9W"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              background: 'var(--gold)', color: 'var(--black)',
              padding: '15px 36px', textDecoration: 'none', fontWeight: 600,
            }}
          >
            Ver formulario de onboarding
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <ServiceCard
            tier="Tier 1" name="Web Vidriera"
            tagline="Para kioscos, barberías, cafeterías y negocios que necesitan presencia digital rápida y profesional."
            setup="150" retainer="30"
            features={['Landing page de hasta 5 secciones', 'Diseño a medida con tu identidad visual', 'Formulario de contacto funcional', 'Hosting + monitoreo automático incluido', '1 cambio menor por mes incluido', '2 rondas de revisión']}
            sla="5 días hábiles"
            className="reveal"
          />
          <ServiceCard
            tier="Tier 2" name="Negocio Digital"
            tagline="Para e-commerce, inmobiliarias y estudios profesionales que necesitan funcionalidad real."
            setup="350" retainer="60"
            features={['Sitio web completo a medida', 'Integraciones: e-commerce, formularios avanzados', 'Base de datos y lógica de servidor', 'Hosting + monitoreo + actualizaciones', '2 cambios menores por mes incluidos', '3 rondas de revisión']}
            sla="10 días hábiles"
            className="reveal reveal-delay-2"
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
          <Link
            to="/servicios"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.78rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--gold)', textDecoration: 'none',
              borderBottom: '1px solid var(--gold-dim)', paddingBottom: '2px',
            }}
          >
            Ver todos los servicios →
          </Link>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section > div:first-child { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
            section > div:nth-child(2) { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{
        ...S.section,
        textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--black), #0E0C08, var(--black))',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '22vw', fontWeight: 300, color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.06)',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap', pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}>VANT HUB</div>

        <div style={{ position: 'relative', zIndex: 2 }} className="reveal">
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 6vw, 7rem)',
            fontWeight: 300, lineHeight: 1, marginBottom: '24px',
          }}>
            ¿Empezamos<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>hoy?</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--white-dim)', maxWidth: '500px', margin: '0 auto 52px', lineHeight: 1.7 }}>
            Completá el formulario de onboarding. En 48 horas te contactamos para arrancar.
            Sin reuniones previas, sin propuestas en PDF.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://tally.so/r/yPDJ9W"
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                background: 'var(--gold)', color: 'var(--black)',
                padding: '15px 36px', textDecoration: 'none', fontWeight: 600,
              }}
            >
              Completar formulario
            </a>
            <a
              href="https://wa.me/542616615176?text=Hola%2C%20me%20interesa%20Vant%20Hub.%20Quiero%20saber%20m%C3%A1s."
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--white-dim)', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '10px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
            >
              O escribinos por WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function ValueItem({ title, text, className }) {
  return (
    <div
      className={className}
      style={{
        background: 'var(--black-card)', border: '1px solid var(--black-border)',
        padding: '28px 32px', transition: 'border-color 0.3s',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold-dim)'
        e.currentTarget.querySelector('.accent-line').style.transform = 'scaleY(1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--black-border)'
        e.currentTarget.querySelector('.accent-line').style.transform = 'scaleY(0)'
      }}
    >
      <div className="accent-line" style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px',
        background: 'var(--gold)', transform: 'scaleY(0)', transformOrigin: 'bottom',
        transition: 'transform 0.3s ease',
      }} />
      <div style={{
        fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.75rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--gold)', marginBottom: '10px',
      }}>{title}</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--white-dim)', lineHeight: 1.6 }}>{text}</div>
    </div>
  )
}

function ServiceCard({ tier, name, tagline, setup, retainer, features, sla, className }) {
  return (
    <div
      className={className}
      style={{
        background: 'var(--black)', border: '1px solid var(--black-border)',
        padding: '48px', position: 'relative', transition: 'border-color 0.3s, transform 0.3s',
        overflow: 'hidden',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-dim)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--black-border)'; e.currentTarget.style.transform = 'none' }}
    >
      <p style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>{tier}</p>
      <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.4rem', fontWeight: 300, lineHeight: 1, marginBottom: '16px' }}>{name}</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--white-dim)', marginBottom: '32px', lineHeight: 1.6 }}>{tagline}</p>
      <div style={{ marginBottom: '36px' }}>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3.2rem', fontWeight: 300, lineHeight: 1 }}>
          <span style={{ fontSize: '1.4rem', color: 'var(--gold)', verticalAlign: 'top', marginTop: '8px', display: 'inline-block', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 400 }}>USD </span>
          {setup}
        </div>
        <div style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.78rem', letterSpacing: '0.1em', color: 'var(--white-dim)', marginTop: '6px' }}>
          Setup único + <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>${retainer} USD / mes</strong>
        </div>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
        {features.map(f => (
          <li key={f} style={{ fontSize: '0.85rem', color: 'var(--white-dim)', display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: 1.5 }}>
            <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>{f}
          </li>
        ))}
      </ul>
      <div style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white-dim)', borderTop: '1px solid var(--black-border)', paddingTop: '24px' }}>
        SLA de entrega: <strong style={{ color: 'var(--gold)' }}>{sla}</strong>
      </div>
    </div>
  )
}
