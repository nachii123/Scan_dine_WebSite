import { motion } from 'framer-motion'
import dashboardImg from '../assets/adminDashBoard.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

const CHECK = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#1F5F2E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CHECKLIST = [
  { title: 'Real-time order notifications', desc: 'Kitchen gets pinged instantly — no more shouting across the floor.' },
  { title: 'Detailed revenue breakdown',    desc: 'Hourly, daily, and weekly revenue with item-level drill-down.' },
  { title: 'Peak-hour demand forecasting',  desc: 'AI-powered predictions help you staff the right number at the right time.' },
  { title: 'Customer satisfaction tracking', desc: 'Embedded ratings at checkout reveal what guests really think.' },
]

/* ── Floating stat badge ── */
const StatBadge = ({ icon, label, value, highlight, delay, style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.82, y: 8 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    style={{
      position: 'absolute',
      background: '#ffffff',
      border: '1px solid #ECECEC',
      borderRadius: 14,
      padding: '10px 16px',
      boxShadow: '0 12px 36px rgba(0,0,0,0.13)',
      display: 'flex', alignItems: 'center', gap: 10,
      zIndex: 20,
      whiteSpace: 'nowrap',
      backdropFilter: 'blur(12px)',
      ...style,
    }}
  >
    <div style={{
      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
      background: highlight ? '#DDF5E1' : '#F6F5F3',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 17,
    }}>{icon}</div>
    <div>
      <div style={{ fontSize: 10.5, color: '#8A8F98', fontWeight: 500, marginBottom: 1 }}>{label}</div>
      <div style={{ fontSize: 13.5, fontWeight: 800, color: '#111', fontFamily: 'Manrope,sans-serif', letterSpacing: '-0.02em' }}>{value}</div>
    </div>
  </motion.div>
)

const DashboardMockup = () => (
  /* 20px top/bottom padding gives badges space to float over the frame corners */
  <div style={{ position: 'relative', padding: '20px 0' }}>

    {/* Enhanced green glow — wider spread, higher opacity */}
    <div style={{
      position: 'absolute',
      top: '5%', left: '-6%', right: '-6%', bottom: '5%',
      background: 'radial-gradient(ellipse at 50% 38%, rgba(31,95,46,0.20) 0%, transparent 68%)',
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
        {/* Chrome bar — wider padding, larger radius for premium feel */}
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
              dashboard.scandine.app
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            <div style={{ width: 7, height: 7, background: '#6FCF97', borderRadius: '50%' }} />
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.30)', fontFamily: 'Inter,sans-serif' }}>Live</span>
          </div>
        </div>

        {/* Screenshot — no maxHeight cap, shows the full dashboard image */}
        <div style={{
          borderRadius: '0 0 20px 20px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.32), 0 0 0 1.5px rgba(255,255,255,0.08)',
        }}>
          <img
            src={dashboardImg}
            alt="ScanDine Admin Dashboard"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </motion.div>
    </motion.div>

    {/* ── Floating badges — overlap the frame corners ── */}
    <StatBadge icon="🔔" label="Orders Today"        value="247 Live"    highlight delay={0.35} style={{ top: 0, left: 24  }} />
    <StatBadge icon="📈" label="Revenue Growth"      value="+35% ↑"      highlight delay={0.50} style={{ top: 0, right: 24 }} />
    <StatBadge icon="📊" label="Real-Time Analytics" value="Always On"   highlight={false} delay={0.62} style={{ bottom: 0, left: 24  }} />
    <StatBadge icon="⭐" label="Avg. Rating"         value="4.8 / 5.0"   highlight={false} delay={0.74} style={{ bottom: 0, right: 24 }} />
  </div>
)

export default function Dashboard() {
  return (
    <section className="section section--gray" id="dashboard">
      <div className="container">
        <div className="dashboard-inner">
          {/* Left: Content */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="section-badge" style={{ marginBottom: 20 }}>✦ Dashboard</div>
            </motion.div>
            <motion.h2 {...fadeUp(0.07)} className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(30px,3.5vw,42px)', marginBottom: 18 }}>
              Your restaurant, fully in view
            </motion.h2>
            <motion.p {...fadeUp(0.13)} style={{ fontSize: 16.5, color: '#5F6368', lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
              One dashboard gives you a complete picture — from live orders to monthly revenue.
              Make data-driven decisions that grow your business.
            </motion.p>

            <div>
              {CHECKLIST.map(({ title, desc }, i) => (
                <motion.div key={title} {...fadeUp(0.17 + i * 0.07)} className="checklist-item">
                  <div className="check-icon"><CHECK /></div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 4, letterSpacing: '-0.01em', fontFamily: 'Manrope,sans-serif' }}>{title}</div>
                    <div style={{ fontSize: 14, color: '#5F6368', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.45)} style={{ marginTop: 36 }}>
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: '#1F5F2E', color: '#fff',
                  fontSize: 15, fontWeight: 600, padding: '13px 24px',
                  borderRadius: 13, textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(31,95,46,0.28)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#174826')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1F5F2E')}
              >
                Explore Dashboard
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
