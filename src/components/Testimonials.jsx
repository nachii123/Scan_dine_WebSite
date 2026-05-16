import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

const Avatar = ({ initials, color }) => (
  <div style={{
    width: 42, height: 42, borderRadius: '50%',
    background: color, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0,
    fontFamily: 'Manrope,sans-serif',
  }}>
    {initials}
  </div>
)

const Stars = () => (
  <div style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="#FBBF24">
        <path d="M7.5 1.5l1.6 3.3 3.6.5-2.6 2.6.6 3.6L7.5 10l-3.2 1.5.6-3.6L2.3 5.3l3.6-.5L7.5 1.5z"/>
      </svg>
    ))}
  </div>
)

const QuoteIcon = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ marginBottom: 16, opacity: 0.12 }}>
    <path d="M0 20V12C0 5.373 3.582 1.493 10.745 0L12 2.667C8.364 3.84 6.424 5.493 6.182 7.627H10V20H0ZM18 20V12C18 5.373 21.582 1.493 28.745 0L30 2.667C26.364 3.84 24.424 5.493 24.182 7.627H28V20H18Z" fill="#111111"/>
  </svg>
)

const TESTIMONIALS = [
  {
    quote: "ScanDine completely transformed how we run service. Our orders used to get lost or misheard — now every order hits the kitchen perfectly. Revenue is up 22% since we switched.",
    name: 'Sanjay Thombare',
    role: 'Owner, Annupurna Hotel',
    city: 'Aurangabad',
    initials: 'ST',
    color: '#1F5F2E',
  },
  {
    quote: "The analytics alone are worth every rupee. I can see exactly which dishes drive the most margin, which hours need more staff, and what our customers actually love. It's like having a data team.",
    name: 'Priya Sharma',
    role: 'Operations Head, Iron & Timber Lounge',
    city: 'Bangalore',
    initials: 'PS',
    color: '#2E7D32',
  },
  {
    quote: "ScanDine completely transformed how we run service at our Bangalore outlet. Earlier, orders were often delayed or miscommunicated — now every order reaches the kitchen instantly and accurately. Service has become much smoother and customer satisfaction has noticeably improved.",
    name: 'Arun Mehta',
    role: 'F&B Director, Oota Bangalore',
    city: 'Bangalore',
    initials: 'AM',
    color: '#174826',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--white" id="testimonials">
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <div className="section-badge">✦ Testimonials</div>
          <h2 className="section-title">Loved by restaurateurs across India</h2>
          <p className="section-desc">
            Real results from real restaurants. Here's what operators say after their first few weeks with ScanDine.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ quote, name, role, city, initials, color }, i) => (
            <motion.div key={name} className="testimonial-card" {...fadeUp(i * 0.09)}>
              <QuoteIcon />
              <Stars />
              <p style={{ fontSize: 15.5, color: '#2D2D2D', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24, fontWeight: 400 }}>
                "{quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid #F3F4F6' }}>
                <Avatar initials={initials} color={color} />
                <div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: '#111', letterSpacing: '-0.01em', fontFamily: 'Manrope,sans-serif' }}>{name}</div>
                  <div style={{ fontSize: 13, color: '#8A8F98', marginTop: 2 }}>{role}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: 11.5, fontWeight: 600, color: '#1F5F2E', background: '#DDF5E1', padding: '4px 10px', borderRadius: 100 }}>
                  {city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          {...fadeUp(0.3)}
          style={{
            marginTop: 64, background: '#F6F5F3', borderRadius: 20,
            padding: '32px 48px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-around', flexWrap: 'wrap', gap: 32,
            border: '1px solid #ECECEC',
          }}
        >
          {[
            { val: '7+', label: 'Restaurants' },
            { val: '1300+',  label: 'Orders Processed' },
            { val: '4.9',  label: 'Avg App Rating' },
            { val: '98%',  label: 'Customer Satisfaction' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: '#111', fontFamily: 'Manrope,sans-serif', letterSpacing: '-0.04em', marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 13.5, color: '#8A8F98', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
