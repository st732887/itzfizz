'use client'

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 3rem',
        mixBlendMode: 'difference',
      }}
    >
      <span
        style={{
          fontWeight: 800,
          fontSize: '1.05rem',
          letterSpacing: '0.18em',
          color: '#fff',
          fontFamily: "'Syne', sans-serif",
        }}
      >
        ITZFIZZ
      </span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Work', 'Services', 'About', 'Contact'].map(link => (
          <a
            key={link}
            href="#"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,.7)',
              textDecoration: 'none',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.target.style.color = '#fff')}
            onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,.7)')}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}
