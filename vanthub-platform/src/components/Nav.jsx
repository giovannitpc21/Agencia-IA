import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/agentes', label: 'Agentes' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/partners', label: 'Partners' },
  { to: '/status', label: 'Status' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 900,
        padding: '28px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled
          ? 'rgba(8,8,8,0.97)'
          : 'linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(2px)',
        transition: 'background 0.3s, backdrop-filter 0.3s',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-display, "Cormorant Garamond", serif)',
          fontSize: '1.5rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          color: 'var(--white)',
          textDecoration: 'none',
        }}
      >
        VANT <span style={{ color: 'var(--gold)' }}>HUB</span>
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          display: 'flex',
          gap: '40px',
          listStyle: 'none',
          alignItems: 'center',
        }}
        className="nav-desktop"
      >
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              style={({ isActive }) => ({
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold)' : 'var(--white-dim)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link
            to="/contacto"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid var(--gold-dim)',
              padding: '8px 20px',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold)'
              e.currentTarget.style.color = 'var(--black)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--gold)'
            }}
          >
            Empezar
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          flexDirection: 'column',
          gap: '5px',
        }}
        className="nav-hamburger"
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              background: 'var(--white)',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen
                ? i === 0 ? 'translateY(6px) rotate(45deg)'
                : i === 2 ? 'translateY(-6px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(8,8,8,0.98)',
            backdropFilter: 'blur(12px)',
            zIndex: 800,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: isActive ? 'var(--gold)' : 'var(--white)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid var(--gold-dim)',
              padding: '12px 32px',
              textDecoration: 'none',
              marginTop: '16px',
            }}
          >
            Empezar
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 24px !important; }
        }
      `}</style>
    </nav>
  )
}
