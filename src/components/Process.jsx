import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

const STEPS = [
  {
    n: '01',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1.5" stroke="#1F5F2E" strokeWidth="1.7"/>
        <rect x="4.5" y="4.5" width="4" height="4" fill="#1F5F2E"/>
        <rect x="15" y="2" width="9" height="9" rx="1.5" stroke="#1F5F2E" strokeWidth="1.7"/>
        <rect x="17.5" y="4.5" width="4" height="4" fill="#1F5F2E"/>
        <rect x="2" y="15" width="9" height="9" rx="1.5" stroke="#1F5F2E" strokeWidth="1.7"/>
        <rect x="4.5" y="17.5" width="4" height="4" fill="#1F5F2E"/>
        <rect x="15" y="15" width="4" height="4" fill="#1F5F2E"/>
        <rect x="22" y="15" width="3" height="3" fill="#1F5F2E"/>
        <rect x="15" y="22" width="9" height="3" fill="#1F5F2E"/>
      </svg>
    ),
    title: 'Generate QR Codes',
    desc: 'Set up your restaurant profile and instantly generate unique QR codes for every table in minutes.',
  },
  {
    n: '02',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="7" y="2" width="12" height="22" rx="3" stroke="#1F5F2E" strokeWidth="1.7"/>
        <path d="M11 6h4M11 21h4" stroke="#1F5F2E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 12h6M10 15.5h4" stroke="#1F5F2E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Guests Scan & Browse',
    desc: 'Diners scan the QR code with any camera. Your full menu loads instantly — beautiful, fast, no app.',
  },
  {
    n: '03',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L15.5 10H23l-6 4.5 2.5 7.5L13 17.5 6.5 22 9 14.5 3 10h7.5L13 3z" stroke="#1F5F2E" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Order & Pay Instantly',
    desc: 'Guests place orders and pay via UPI, card, or wallet — directly from the menu. Zero friction.',
  },
  {
    n: '04',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 20L9 13l5 5 5-8 4 5" stroke="#1F5F2E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="22" height="22" rx="3.5" stroke="#1F5F2E" strokeWidth="1.7"/>
      </svg>
    ),
    title: 'Track & Grow',
    desc: 'Monitor orders, revenue, and ratings in real time. Discover insights that actually move the needle.',
  },
]

export default function Process() {
  return (
    <section className="section section--white" id="process">
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <div className="section-badge">✦ How It Works</div>
          <h2 className="section-title">Up and running in under an hour</h2>
          <p className="section-desc">
            No hardware. No training. Just a QR code and your existing phone — that's all it takes to get started.
          </p>
        </motion.div>

        <div className="process-steps">
          {STEPS.map(({ n, icon, title, desc }, i) => (
            <motion.div key={n} className="process-step" {...fadeUp(i * 0.10)}>
              <div className="step-number">{n}</div>
              <div style={{
                width: 56, height: 56, background: '#F0FDF4',
                borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px', border: '1px solid #DDF5E1',
              }}>
                {icon}
              </div>
              <div className="step-title">{title}</div>
              <p className="step-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
