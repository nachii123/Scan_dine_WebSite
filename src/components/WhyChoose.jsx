import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

const ROWS = [
  {
    problem: { title: 'Paper menus & constant reprinting',     desc: 'Every price change costs money and takes days' },
    solution: { title: 'Update menus instantly, at zero cost', desc: 'Change prices, add specials, go seasonal — in seconds' },
  },
  {
    problem: { title: 'Verbal orders get lost or misheard',   desc: 'Staff errors reach the kitchen, guests get wrong dishes' },
    solution: { title: 'Orders go direct to kitchen — zero errors', desc: 'No relay, no miscommunication, perfect orders every time' },
  },
  {
    problem: { title: 'No data. No visibility. No control.',  desc: "You don't know what's selling or what's being wasted" },
    solution: { title: 'Live analytics dashboard, always on', desc: 'See revenue, bestsellers, and peak hours in real time' },
  },
  {
    problem: { title: 'Long wait times hurt reviews & revenue', desc: 'Slow service means tables turn slowly — less daily income' },
    solution: { title: '48% faster table turnover on average',  desc: 'Serve more covers per shift, grow revenue automatically' },
  },
  {
    problem: { title: 'Customers leave and never come back',   desc: 'No follow-up, no loyalty loop, no repeat business' },
    solution: { title: 'Smart engagement brings customers back', desc: 'Automated re-engagement that builds a loyal customer base' },
  },
]

export default function WhyChoose() {
  return (
    <section className="section section--white" id="why">
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <div className="section-badge">✦ Why ScanDine</div>
          <h2 className="section-title">The gap between thriving and just surviving</h2>
          <p className="section-desc">
            Restaurants that switch to ScanDine see measurable results in the first 30 days.
            Here's exactly what changes.
          </p>
        </motion.div>

        {/* Comparison layout */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="comparison-outer"
        >
          {/* ── Left: Old Way ── */}
          <div className="comparison-col">
            <div className="comparison-col-hd comparison-col-hd--old">
              <div className="comparison-indicator comparison-indicator--no" style={{ width: 28, height: 28, fontSize: 13 }}>✕</div>
              The Old Way
            </div>
            {ROWS.map(({ problem }) => (
              <div key={problem.title} className="comparison-row comparison-row--old">
                <div className="comparison-indicator comparison-indicator--no">✕</div>
                <div>
                  <div className="comparison-row-title" style={{ color: '#5F6368' }}>{problem.title}</div>
                  <div className="comparison-row-desc">{problem.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── VS divider ── */}
          <div className="comparison-vs-col">
            <div className="comparison-vs-line" />
            <div className="comparison-vs-badge">VS</div>
            <div className="comparison-vs-line" />
          </div>

          {/* ── Right: ScanDine Way ── */}
          <div className="comparison-col comparison-col--new">
            <div className="comparison-col-hd comparison-col-hd--new">
              <div className="comparison-indicator comparison-indicator--yes" style={{ width: 28, height: 28, fontSize: 13 }}>✓</div>
              The ScanDine Way
            </div>
            {ROWS.map(({ solution }) => (
              <div key={solution.title} className="comparison-row">
                <div className="comparison-indicator comparison-indicator--yes">✓</div>
                <div>
                  <div className="comparison-row-title">{solution.title}</div>
                  <div className="comparison-row-desc">{solution.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA nudge */}
        <motion.div {...fadeUp(0.2)} style={{ textAlign: 'center', marginTop: 52 }}>
          <p style={{ fontSize: 15, color: '#5F6368', marginBottom: 20 }}>
            Join <strong style={{ color: '#111' }}>7+ restaurants</strong> already winning with ScanDine.
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#1F5F2E', color: '#fff',
              fontWeight: 700, fontSize: 15, padding: '13px 28px',
              borderRadius: 13, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(31,95,46,0.32)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#174826')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1F5F2E')}
          >
            Transform Your Restaurant Today
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
