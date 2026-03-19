import { Link } from 'react-router-dom'

const links = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/agentes', label: 'Agentes' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/partners', label: 'Partners' },
  { to: '/status', label: 'Status' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--black-border)',
        padding: '48px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.1rem',
          fontWeight: 500,
          letterSpacing: '0.15em',
          color: 'var(--white)',
          textDecoration: 'none',
        }}
      >
        VANT <span style={{ color: 'var(--gold)' }}>HUB</span>
      </Link>

      {/* Nav links */}
      <nav style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--white-dim)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <div style={{ textAlign: 'right' }}>
        <p
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: 'var(--white-dim)',
          }}
        >
          © {new Date().getFullYear()} Vant Hub
        </p>
        <p
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: 'var(--white-dim)',
            marginTop: '4px',
          }}
        >
          Mendoza, Argentina
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 24px !important;
            padding: 40px 24px !important;
          }
          footer > div:last-child { text-align: center !important; }
        }
      `}</style>
    </footer>
  )
}
