import { motion } from 'framer-motion'

const TRUST_ITEMS = [
  { icon: '🔒', label: 'Secure & encrypted' },
  { icon: '⚡', label: 'Live in under 1 hour' },
  { icon: '🎯', label: '14-day free trial' },
  { icon: '💬', label: '24/7 support' },
]

export default function CTA() {
  return (
    <section className="section section--gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="cta-card"
        >
          {/* Decorative dot grids */}
          <div style={{ position: 'absolute', top: 40, left: 60, width: 140, height: 140, opacity: 0.06, pointerEvents: 'none' }}>
            <svg viewBox="0 0 140 140" fill="none">
              {Array.from({ length: 7 }).map((_, row) =>
                Array.from({ length: 7 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2.5" fill="#fff"/>
                ))
              )}
            </svg>
          </div>
          <div style={{ position: 'absolute', bottom: 40, right: 60, width: 140, height: 140, opacity: 0.06, pointerEvents: 'none' }}>
            <svg viewBox="0 0 140 140" fill="none">
              {Array.from({ length: 7 }).map((_, row) =>
                Array.from({ length: 7 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2.5" fill="#fff"/>
                ))
              )}
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Urgency strip */}
            <div className="urgency-strip">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ position: 'relative', width: 8, height: 8 }}>
                  <div className="live-dot-ring" style={{ background: '#6FCF97' }} />
                  <div style={{ width: 8, height: 8, background: '#6FCF97', borderRadius: '50%', position: 'relative' }} />
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                  Free setup offer · Limited spots this month
                </span>
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 5 }}>47 of 60 spots claimed</div>
                <div className="urgency-progress-wrap">
                  <div className="urgency-progress-bar" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(32px, 4.2vw, 58px)', fontWeight: 800, color: '#fff',
              lineHeight: 1.06, letterSpacing: '-0.04em', maxWidth: 700,
              margin: '0 auto 18px',
            }}>
              Stop losing revenue to slow service.
            </h2>

            {/* Sub-headline */}
            <p style={{
              fontSize: 17.5, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7,
              maxWidth: 520, margin: '0 auto 16px',
            }}>
              Join 7+ restaurants growing with ScanDine. Setup takes under an hour.
              Your first results show within the first week.
            </p>

            {/* Key outcome pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
              {[
                { stat: '35%', label: 'Revenue increase' },
                { stat: '48%', label: 'Faster table turnover' },
                { stat: '2M+', label: 'Orders processed' },
              ].map(({ stat, label }) => (
                <div key={label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 10, padding: '8px 16px',
                }}>
                  <span style={{ fontSize: 17, fontWeight: 800, color: '#6FCF97', fontFamily: 'Manrope,sans-serif', letterSpacing: '-0.03em' }}>{stat}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#FFFFFF', color: '#111111',
                  fontWeight: 700, fontSize: 15.5, padding: '15px 32px',
                  borderRadius: 14, textDecoration: 'none', letterSpacing: '-0.02em',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.22)', height: 52,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.92')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Start Growing My Restaurant
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'transparent', color: 'rgba(255,255,255,0.85)',
                  fontWeight: 600, fontSize: 15.5, padding: '14px 28px',
                  borderRadius: 14, textDecoration: 'none', letterSpacing: '-0.01em',
                  border: '1.5px solid rgba(255,255,255,0.25)', height: 52,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
              >
                Book a Free Demo Call
              </motion.a>
            </div>

            {/* Trust row */}
            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              {TRUST_ITEMS.map(({ icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.42)', fontWeight: 500 }}>
                  <span style={{ fontSize: 14 }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
