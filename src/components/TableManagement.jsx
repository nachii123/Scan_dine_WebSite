import { motion } from 'framer-motion'
import tableImg from '../assets/tableImg.png'
import pendingOrderImg from '../assets/pendingOrder.png'
import activeOrdersImg from '../assets/activeOrders.png'
import menuImg from '../assets/menu.png'
import customerDetailsImg from '../assets/customerDetails.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

const FEATURES = [
  {
    icon: '📊',
    title: 'Real-Time Floor Overview',
    desc: 'See all tables at a glance with live occupancy status. Manage seating, merge tables, and track guest flow.',
    image: tableImg,
  },
  {
    icon: '📥',
    title: 'Live Order Queue',
    desc: 'Incoming orders arrive instantly with guest details. Auto-route to kitchen with zero missed orders.',
    image: pendingOrderImg,
  },
  {
    icon: '✅',
    title: 'Order Management',
    desc: 'Track order status from kitchen to table. Guests know exactly when their food arrives.',
    image: activeOrdersImg,
  },
  {
    icon: '🍽️',
    title: 'Digital Menu',
    desc: 'Beautiful QR menus with categories, photos, and descriptions. Guests browse and order instantly.',
    image: menuImg,
  },
  {
    icon: '👤',
    title: 'Customer Details',
    desc: 'Capture guest preferences, dietary restrictions, and contact info for personalized service.',
    image: customerDetailsImg,
  },
]

export default function TableManagement() {
  return (
    <section className="section section--white" id="table-management">
      <div className="container">
        {/* Section Header */}
        <motion.div className="section-header" {...fadeUp(0)}>
          <div className="section-badge">✦ Restaurant Operations</div>
          <h2 className="section-title">Seamless Table & Order Management</h2>
          <p className="section-desc">
            From the moment a guest sits down to when the bill is paid — every operation is in sync.
            No missed orders, no confusion, pure restaurant efficiency.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Carousel - 5 Mobile Screenshots */}
        <div style={{
          marginTop: 48,
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            padding: '0 20px',
            margin: '0 -20px',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}
          className="hide-scrollbar"
          >
            {FEATURES.map(({ icon, title, desc, image }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.08)}
                style={{
                  flex: '0 0 320px',
                  minWidth: '320px',
                  maxWidth: '320px',
                  borderRadius: 20,
                  overflow: 'hidden',
                  background: '#fff',
                  border: '1px solid #ECECEC',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  scrollSnapAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(31,95,46,0.12)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Image Container - Professional Mobile Screenshot Display */}
                <div style={{
                  width: '100%',
                  minHeight: 580,
                  height: 'auto',
                  background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
                  padding: '32px 24px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottom: '1px solid #ECECEC',
                  overflow: 'visible',
                }}>
                  <img
                    src={image}
                    alt={title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '520px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      borderRadius: '16px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.10)',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{icon}</div>
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#111',
                    marginBottom: 12,
                    fontFamily: 'Manrope,sans-serif',
                    letterSpacing: '-0.01em',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    color: '#5F6368',
                    lineHeight: 1.7,
                  }}>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginTop: 24,
          }}>
            {FEATURES.map((_, i) => (
              <div
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: i === 0 ? '#1F5F2E' : '#ddd',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
                onClick={() => {
                  const container = document.querySelector('.hide-scrollbar')
                  if (container) {
                    container.scrollTo({
                      left: i * 344, // 320px card + 24px gap
                      behavior: 'smooth'
                    })
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp(0.3)} style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontSize: 15, color: '#5F6368', marginBottom: 20 }}>
            Ready to transform your restaurant operations? Let's get started.
          </p>
          <a
            href="#pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#1F5F2E',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              padding: '13px 28px',
              borderRadius: 13,
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(31,95,46,0.28)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#174826')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1F5F2E')}
          >
            View Pricing Plans
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
