import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="1" y="1" width="8" height="8" rx="1.5" stroke="#1F5F2E" strokeWidth="1.6"/><rect x="3.5" y="3.5" width="3" height="3" fill="#1F5F2E"/><rect x="13" y="1" width="8" height="8" rx="1.5" stroke="#1F5F2E" strokeWidth="1.6"/><rect x="15.5" y="3.5" width="3" height="3" fill="#1F5F2E"/><rect x="1" y="13" width="8" height="8" rx="1.5" stroke="#1F5F2E" strokeWidth="1.6"/><rect x="3.5" y="15.5" width="3" height="3" fill="#1F5F2E"/><rect x="13" y="13" width="3" height="3" fill="#1F5F2E"/><rect x="19" y="13" width="2" height="2" fill="#1F5F2E"/><rect x="13" y="19" width="8" height="2" fill="#1F5F2E"/><rect x="16" y="16" width="2" height="2" fill="#1F5F2E"/></svg>
    ),
    title: 'QR Digital Menu',
    desc: 'Generate custom QR codes per table. Guests scan and browse your full menu instantly — no app download required.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2v5M11 15v5M2 11h5M15 11h5" stroke="#1F5F2E" strokeWidth="1.7" strokeLinecap="round"/><circle cx="11" cy="11" r="4" stroke="#1F5F2E" strokeWidth="1.7"/><circle cx="11" cy="11" r="1.5" fill="#1F5F2E"/></svg>
    ),
    title: 'Live Order Tracking',
    desc: 'Orders flow directly to your kitchen display in real time. Zero missed orders, zero paper tickets, full control.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 18L8 12l4 4 4-6 3 4" stroke="#1F5F2E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="18" height="18" rx="3" stroke="#1F5F2E" strokeWidth="1.6"/></svg>
    ),
    title: 'Smart Analytics',
    desc: 'Revenue trends, peak hours, bestselling dishes, and customer behavior — all in one intuitive dashboard.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="#1F5F2E" strokeWidth="1.6"/><rect x="13" y="2" width="7" height="7" rx="1.5" stroke="#1F5F2E" strokeWidth="1.6"/><rect x="2" y="13" width="7" height="7" rx="1.5" stroke="#1F5F2E" strokeWidth="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.5" stroke="#1F5F2E" strokeWidth="1.6"/></svg>
    ),
    title: 'Table Management',
    desc: 'Visual floor map with live table status. Manage seating, merge tables, and track occupancy at a glance.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="5" width="18" height="14" rx="2.5" stroke="#1F5F2E" strokeWidth="1.6"/><path d="M6 9h10M6 13h6" stroke="#1F5F2E" strokeWidth="1.5" strokeLinecap="round"/><path d="M2 9h18" stroke="#1F5F2E" strokeWidth="1.6"/></svg>
    ),
    title: 'Payment Integration',
    desc: 'UPI, cards, wallets — guests pay directly from the menu. Split bills, apply offers, receive instantly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#1F5F2E" strokeWidth="1.6"/><path d="M11 2c0 0-4 4-4 9s4 9 4 9" stroke="#1F5F2E" strokeWidth="1.5"/><path d="M11 2c0 0 4 4 4 9s-4 9-4 9" stroke="#1F5F2E" strokeWidth="1.5"/><path d="M2 11h18" stroke="#1F5F2E" strokeWidth="1.5"/><path d="M3 7h16M3 15h16" stroke="#1F5F2E" strokeWidth="1.3" strokeLinecap="round"/></svg>
    ),
    title: 'Multi-language',
    desc: 'Serve every guest in their preferred language. Menus auto-translate across Hindi, Tamil, Kannada, and more.',
  },
]

export default function Features() {
  return (
    <section className="section section--white" id="features">
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <div className="section-badge">✦ Platform Features</div>
          <h2 className="section-title">Everything your restaurant needs</h2>
          <p className="section-desc">
            From the first scan to the final bill — ScanDine powers every touchpoint of the modern dining experience.
          </p>
        </motion.div>

        <div className="features-grid">
          {FEATURES.map(({ icon, title, desc }, i) => (
            <motion.div key={title} className="feature-card" {...fadeUp(i * 0.07)}>
              <div className="feature-icon">{icon}</div>
              <div className="feature-title">{title}</div>
              <p className="feature-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
