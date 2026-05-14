import { motion } from 'framer-motion'
import campaignImg from '../assets/campaignScreen.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] },
})

const BULLETS = [
  {
    icon: '📣',
    text: 'One-click campaign launches',
    sub: 'Send offers, promos, and specials to all your customers in seconds.',
  },
  {
    icon: '🔔',
    text: 'Push notifications & reminders',
    sub: 'Re-engage diners who haven\'t visited in a while — automatically.',
  },
  {
    icon: '🎁',
    text: 'Loyalty rewards & discounts',
    sub: 'Build a loyal base with targeted offers that keep customers coming back.',
  },
  {
    icon: '📊',
    text: 'Campaign performance tracking',
    sub: 'See open rates, redemptions, and revenue from every campaign you run.',
  },
]

/* ── Browser frame (web app) with real screenshot ── */
function CampaignBrowser() {
  return (
    /* 20px top/bottom padding gives badges space to overlap the frame corners */
    <div style={{ position: 'relative', padding: '20px 0' }}>

      {/* Enhanced glow */}
      <div style={{
        position: 'absolute',
        top: '5%', left: '-6%', right: '-6%', bottom: '5%',
        background: 'radial-gradient(ellipse at 50% 38%, rgba(31,95,46,0.18) 0%, transparent 68%)',
        filter: 'blur(52px)',
        borderRadius: 48,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Browser frame */}
      <motion.div
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.88, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Chrome bar */}
          <div style={{
            background: 'linear-gradient(160deg, #1e1e1e 0%, #141414 100%)',
            borderRadius: '20px 20px 0 0',
            padding: '13px 20px',
            display: 'flex', alignItems: 'center', gap: 14,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            <div style={{ display: 'flex', gap: 7, flexShrink: 0 }}>
              {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                <div key={c} style={{ width: 12, height: 12, background: c, borderRadius: '50%' }} />
              ))}
            </div>
            <div style={{
              flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 8,
              padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <rect x="1" y="4" width="7" height="6" rx="1" stroke="rgba(255,255,255,0.30)" strokeWidth="1"/>
                <path d="M2.5 4V3a2 2 0 014 0v1" stroke="rgba(255,255,255,0.30)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter,sans-serif' }}>
                campaigns.scandine.app
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
              <div style={{ width: 7, height: 7, background: '#FBBF24', borderRadius: '50%' }} />
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.30)', fontFamily: 'Inter,sans-serif' }}>Campaign</span>
            </div>
          </div>

          {/* Screenshot — no maxHeight cap, shows the full campaign image */}
          <div style={{
            borderRadius: '0 0 20px 20px',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.28), 0 0 0 1.5px rgba(255,255,255,0.08)',
          }}>
            <img
              src={campaignImg}
              alt="ScanDine Campaign Management"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Floating badges — overlap the frame corners ── */}
      <FloatBadge icon="🎯" line1="Promo Campaign Active"    line2="Sent to 1,240 customers" accent delay={0.38} style={{ top: 0, left: 24  }} />
      <FloatBadge icon="📈" line1="+42% Customer Retention" line2="vs last month"            accent delay={0.50} style={{ top: 0, right: 24 }} />
      <FloatBadge icon="✉️" line1="Push Sent"               line2="98% delivery rate"        accent={false} delay={0.62} style={{ bottom: 0, left: 24  }} />
      <FloatBadge icon="🎁" line1="Loyalty Rewards"         line2="Auto-applied at checkout" accent={false} delay={0.74} style={{ bottom: 0, right: 24 }} />
    </div>
  )
}

/* ── Floating micro-element ── */
function FloatBadge({ icon, line1, line2, accent, delay, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.48, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        background: '#fff',
        border: `1px solid ${accent ? '#B7E4B8' : '#ECECEC'}`,
        borderRadius: 13,
        padding: '9px 14px',
        boxShadow: accent
          ? '0 8px 28px rgba(31,95,46,0.14)'
          : '0 8px 28px rgba(0,0,0,0.10)',
        display: 'flex', alignItems: 'center', gap: 9,
        zIndex: 10, whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 9, flexShrink: 0,
        background: accent ? '#DDF5E1' : '#F6F5F3',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 15,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 11.5, fontWeight: 800, color: '#111', fontFamily: 'Manrope,sans-serif', letterSpacing: '-0.01em' }}>{line1}</div>
        {line2 && <div style={{ fontSize: 10, color: accent ? '#1F5F2E' : '#8A8F98', fontWeight: 500, marginTop: 1 }}>{line2}</div>}
      </div>
    </motion.div>
  )
}


export default function Campaign() {
  return (
    <section className="section section--white" id="campaigns" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="campaign-inner">

          {/* ── Left: Browser mockup composition ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <CampaignBrowser />
          </motion.div>

          {/* ── Right: Text content ── */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="section-badge" style={{ marginBottom: 20 }}>✦ Marketing & Growth</div>
            </motion.div>

            <motion.h2
              {...fadeUp(0.07)}
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 800,
                color: '#111', letterSpacing: '-0.04em', lineHeight: 1.1,
                marginBottom: 18, fontFamily: 'Manrope, sans-serif',
              }}
            >
              Turn one-time diners into loyal regulars.
            </motion.h2>

            <motion.p
              {...fadeUp(0.13)}
              style={{ fontSize: 16.5, color: '#5F6368', lineHeight: 1.72, marginBottom: 36, maxWidth: 460 }}
            >
              ScanDine's built-in campaign tools let you launch promos, send push notifications,
              and build a loyal customer base — all from the same dashboard you use to manage orders.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {BULLETS.map(({ icon, text, sub }, i) => (
                <motion.div
                  key={text}
                  {...fadeUp(0.18 + i * 0.07)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    padding: '16px 0', borderBottom: '1px solid #F3F4F6',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: '#F0FDF4', border: '1px solid #DDF5E1',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, marginTop: 1,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#111', fontFamily: 'Manrope,sans-serif', marginBottom: 4, letterSpacing: '-0.01em' }}>{text}</div>
                    <div style={{ fontSize: 13.5, color: '#5F6368', lineHeight: 1.6 }}>{sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.52)} style={{ marginTop: 36 }}>
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#1F5F2E', color: '#fff',
                  fontSize: 15, fontWeight: 600, padding: '13px 26px',
                  borderRadius: 13, textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(31,95,46,0.30)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#174826')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1F5F2E')}
              >
                Grow Your Customer Base
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        .campaign-inner {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 1100px) {
          .campaign-inner { grid-template-columns: 1fr; gap: 52px; }
          .campaign-inner > div:first-child { order: 1; }
          .campaign-inner > div:last-child  { order: 0; }
        }
      `}</style>
    </section>
  )
}
