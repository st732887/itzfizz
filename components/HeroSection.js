'use client'

import { useEffect, useRef } from 'react'
import CarSVG from './CarSVG'

const STATS = [
  { id: 's1', color: 'lime',   tag: 'Pick-up', pct: '58%', label: 'Increase in pick-up\npoint utilisation' },
  { id: 's2', color: 'dark',   tag: 'Growth',  pct: '27%', label: 'Increase in repeat\ncustomer orders' },
  { id: 's3', color: 'sky',    tag: 'Support', pct: '23%', label: 'Decrease in customer\nphone calls' },
  { id: 's4', color: 'orange', tag: 'NPS',     pct: '40%', label: 'Reduction in delivery\ncomplaints' },
]

const CARD_BG = {
  lime:   { bg: '#d1f542', color: '#111' },
  dark:   { bg: '#222',    color: '#fff' },
  sky:    { bg: '#6ac9ff', color: '#111' },
  orange: { bg: '#fa7228', color: '#111' },
}

const THRESHOLDS = [0.18, 0.34, 0.52, 0.68]
const WORD = 'WELCOME\u00A0ITZFIZZ'

export default function HeroSection() {
  const sectionRef  = useRef(null)
  const trackRef    = useRef(null)
  const roadRef     = useRef(null)
  const carRef      = useRef(null)
  const trailRef    = useRef(null)
  const pctRef      = useRef(null)
  const hintRef     = useRef(null)
  const hlRefs      = useRef([])
  const cardRefs    = useRef([])
  const rafRef      = useRef(null)

  useEffect(() => {
    let gsap, ScrollTrigger

    async function init() {
      const gsapMod = await import('gsap')
      const stMod   = await import('gsap/ScrollTrigger')
      gsap = gsapMod.gsap
      ScrollTrigger = stMod.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      /* ── INTRO: hint fade in ── */
      gsap.fromTo(
        hintRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.8, ease: 'expo.out' }
      )

      /* ── STAGGERED CARD INTRO (before scroll) ── */
      // Cards will be driven by scroll, but give initial state via gsap.set
      cardRefs.current.forEach(card => {
        gsap.set(card, { opacity: 0, y: 28 })
      })

      /* ── SCROLL TRIGGER ── */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: trackRef.current,
        scrub: 1.1,

        onUpdate(self) {
          const p = self.progress

          /* ── CAR + TRAIL ── */
          const road = roadRef.current
          const car  = carRef.current
          const trail = trailRef.current
          if (!road || !car || !trail) return

          const rw  = road.offsetWidth
          const cw  = car.offsetWidth
          const endX = rw - cw
          const x   = endX * p

          gsap.set(car,   { x })
          gsap.set(trail, { width: Math.max(0, x + cw * 0.55) })

          if (pctRef.current) {
            pctRef.current.textContent =
              String(Math.round(p * 100)).padStart(2, '0') + '%'
          }

          /* ── LETTER REVEAL ── */
          const rRect  = road.getBoundingClientRect()
          const carMid = x + cw * 0.65

          hlRefs.current.forEach(el => {
            if (!el) return
            const lr  = el.getBoundingClientRect()
            const mid = lr.left + lr.width / 2 - rRect.left
            if (carMid >= mid) {
              el.classList.add('revealed')
            } else {
              el.classList.remove('revealed')
            }
          })

          /* ── HIDE HINT ── */
          if (p > 0.04 && hintRef.current) {
            gsap.to(hintRef.current, { opacity: 0, duration: 0.3, overwrite: 'auto' })
          }

          /* ── STAT CARDS ── */
          cardRefs.current.forEach((card, i) => {
            if (!card) return
            const th = THRESHOLDS[i]
            const t  = p >= th ? Math.min((p - th) / 0.14, 1) : 0
            card.style.opacity   = t
            card.style.transform = `translateY(${(1 - t) * 28}px)`
          })
        },
      })

      /* ── AFTER SECTION REVEAL ── */
      const revealEls = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.15 }
      )
      revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.12}s`
        obs.observe(el)
      })
    }

    init()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(t => t.kill())
      })
    }
  }, [])

  return (
    <>
      {/* ── SCROLL SECTION (300vh tall so there's scroll room) ── */}
      <div ref={sectionRef} style={{ height: '300vh', position: 'relative' }}>

        {/* ── STICKY TRACK ── */}
        <div
          ref={trackRef}
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            background: '#c8c8c0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ── UPPER AREA ── */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'stretch',
              position: 'relative',
            }}
          >
            {/* Left zone — logo hint area */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '0 0 2rem 3rem',
                position: 'relative',
              }}
            >
              {/* Scroll hint */}
              <div
                ref={hintRef}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.58rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#666',
                  }}
                >
                  scroll
                </span>
                <div className="hint-bar" />
              </div>
            </div>

            {/* Right zone — 2×2 stat cards grid */}
            <div
              style={{
                width: '55%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '1rem',
                padding: '1.5rem 2rem 1.5rem 1rem',
              }}
            >
              {STATS.map((stat, i) => {
                const { bg, color } = CARD_BG[stat.color]
                return (
                  <div
                    key={stat.id}
                    ref={el => (cardRefs.current[i] = el)}
                    className="stat-card"
                    style={{ background: bg, color }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.55rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        opacity: stat.color === 'dark' ? 0.38 : 0.45,
                        marginBottom: '0.5rem',
                        color: stat.color === 'dark' ? '#fff' : 'inherit',
                      }}
                    >
                      {stat.tag}
                    </div>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                        lineHeight: 1,
                        display: 'block',
                        color: stat.color === 'dark' ? '#fff' : 'inherit',
                      }}
                    >
                      {stat.pct}
                    </span>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.67rem',
                        lineHeight: 1.6,
                        letterSpacing: '0.04em',
                        opacity: 0.6,
                        marginTop: '0.5rem',
                        whiteSpace: 'pre-line',
                        color: stat.color === 'dark' ? 'rgba(255,255,255,0.55)' : 'inherit',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── TOP CURB ── */}
          <div className="curb" />

          {/* ── ROAD ── */}
          <div
            ref={roadRef}
            style={{
              width: '100%',
              height: 'clamp(120px, 22vh, 200px)',
              background: '#3a8a00',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {/* Center lane dashes */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '3px',
                transform: 'translateY(-50%)',
                background:
                  'repeating-linear-gradient(90deg, rgba(255,255,255,.18) 0, rgba(255,255,255,.18) 50px, transparent 50px, transparent 110px)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Trail */}
            <div
              ref={trailRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: 0,
                zIndex: 2,
                background: 'linear-gradient(90deg,#9ed400,#6ea300)',
                opacity: 0.55,
              }}
            />

            {/* Headline */}
            <div
              aria-label="Welcome ITZFIZZ"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                userSelect: 'none',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: '#111',
                fontSize: 'clamp(2.2rem, 7vw, 6.5rem)',
                whiteSpace: 'nowrap',
              }}
            >
              {[...WORD].map((ch, i) => (
                <span
                  key={i}
                  ref={el => (hlRefs.current[i] = el)}
                  className="hl"
                  style={ch === '\u00A0' ? { width: '0.38em' } : {}}
                >
                  {ch === '\u00A0' ? '\u00A0' : ch}
                </span>
              ))}
            </div>

            {/* Car */}
            <div
              ref={carRef}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                width: 'clamp(140px, 18vw, 240px)',
                zIndex: 10,
                willChange: 'transform',
              }}
            >
              <CarSVG />
            </div>

            {/* Progress % */}
            <span
              ref={pctRef}
              style={{
                position: 'absolute',
                right: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,.28)',
                zIndex: 5,
                userSelect: 'none',
              }}
            >
              00%
            </span>
          </div>

          {/* ── BOTTOM CURB ── */}
          <div className="curb curb-flip" />
        </div>
      </div>

      {/* ── AFTER SECTION ── */}
      <div
        style={{
          minHeight: '70vh',
          background: '#0d0d0d',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          padding: '7rem 2rem',
        }}
      >
        <span
          className="reveal"
          style={{
            display: 'inline-block',
            padding: '0.35rem 1rem',
            border: '1px solid rgba(255,255,255,.14)',
            borderRadius: '100px',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,.4)',
            textTransform: 'uppercase',
          }}
        >
          Case Study — 2024
        </span>

        <h2
          className="reveal"
          style={{
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.15,
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            color: '#fff',
          }}
        >
          Results that move<br />at full speed.
        </h2>

        <p
          className="reveal"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: 'rgba(255,255,255,.38)',
            fontSize: '0.8rem',
            letterSpacing: '0.06em',
            textAlign: 'center',
            lineHeight: 1.8,
          }}
        >
          ITZFIZZ helped brands accelerate their logistics<br />
          experience from 0 to 100.
        </p>

        <div
          className="reveal"
          style={{
            marginTop: '1.25rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
        >
          {[
            { val: '58%', label: 'Pick-up growth' },
            { val: '23%', label: 'Call reduction' },
            { val: '40%', label: 'Fewer complaints' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,.1)',
                background: 'rgba(255,255,255,.03)',
              }}
            >
              <strong
                style={{
                  display: 'block',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#d1f542',
                }}
              >
                {item.val}
              </strong>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.62rem',
                  color: 'rgba(255,255,255,.38)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '0.3rem',
                  display: 'block',
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
