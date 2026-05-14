import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import menuImg from '../assets/menu.png'
import orderDetailsImg from '../assets/orderDetailsScreen.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

/* ── iPhone Frame Component ── */
function IPhoneFrame({ children, glowColor = '#1F5F2E', rotate = -4, floatOffset = 12, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotate: rotate * 0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      animate={{ y: [0, -floatOffset, 0] }}
      style={{ display: 'inline-block' }}
    >
      <motion.div
        animate={{ y: [0, -floatOffset, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
        style={{ position: 'relative' }}
      >
        {/* Glow halo */}
        <div style={{
          position: 'absolute', inset: '-24px',
          background: `radial-gradient(ellipse at 50% 60%, ${glowColor}30 0%, transparent 70%)`,
          borderRadius: 60, pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Device shell */}
        <div style={{
          position: 'relative', zIndex: 1,
          width: 240, height: 488,
          background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)',
          borderRadius: 44,
          boxShadow: '0 0 0 1.5px #333, 0 0 0 3px #111, 0 36px 80px rgba(0,0,0,0.38), 0 8px 24px rgba(0,0,0,0.22)',
          overflow: 'hidden',
          padding: '12px 7px 14px',
        }}>
          {/* Side buttons (left) */}
          <div style={{ position: 'absolute', left: -3, top: 100, width: 3, height: 32, background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', left: -3, top: 144, width: 3, height: 32, background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', left: -3, top: 184, width: 3, height: 52, background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
          {/* Side button (right) */}
          <div style={{ position: 'absolute', right: -3, top: 148, width: 3, height: 68, background: '#2a2a2a', borderRadius: '0 2px 2px 0' }} />

          {/* Inner screen area */}
          <div style={{
            width: '100%', height: '100%',
            background: '#fff',
            borderRadius: 36,
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Notch / Dynamic Island */}
            <div style={{
              position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
              width: 88, height: 26, background: '#0d0d0d',
              borderRadius: 20, zIndex: 10,
            }} />

            {/* Screen content */}
            <div style={{ width: '100%', height: '100%', paddingTop: 0 }}>
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── QR Menu Screen ── */
function QRMenuScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', fontFamily: 'Inter, sans-serif', overflowY: 'hidden' }}>
      {/* Status bar area */}
      <div style={{ height: 44, background: '#fff' }} />

      {/* Header */}
      <div style={{ background: '#1F5F2E', padding: '14px 16px 18px', color: '#fff' }}>
        <div style={{ fontSize: 9, opacity: 0.7, marginBottom: 2 }}>The Spice Garden · Table 4</div>
        <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'Manrope, sans-serif' }}>Our Menu</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
          {['All', 'Starters', 'Mains', 'Drinks'].map((cat, i) => (
            <div key={cat} style={{
              fontSize: 8.5, fontWeight: 600, padding: '4px 9px', borderRadius: 20,
              background: i === 0 ? '#fff' : 'rgba(255,255,255,0.18)',
              color: i === 0 ? '#1F5F2E' : '#fff',
            }}>{cat}</div>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { name: 'Butter Chicken', price: '₹320', tag: '🔥 Popular', img: '🍛' },
          { name: 'Veg Biryani', price: '₹240', tag: '🌱 Veg', img: '🍚' },
          { name: 'Paneer Tikka', price: '₹280', tag: '⭐ Chef\'s Pick', img: '🫕' },
        ].map(item => (
          <div key={item.name} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#F9FAFB', borderRadius: 10, padding: '8px 10px',
            border: '1px solid #F3F4F6',
          }}>
            <div style={{ fontSize: 22, flexShrink: 0 }}>{item.img}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#111', marginBottom: 1, fontFamily: 'Manrope,sans-serif' }}>{item.name}</div>
              <div style={{ fontSize: 8, color: '#1F5F2E', fontWeight: 600 }}>{item.tag}</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 10.5, fontWeight: 800, color: '#111', fontFamily: 'Manrope,sans-serif' }}>{item.price}</div>
              <div style={{
                marginTop: 3, width: 20, height: 20, borderRadius: 6,
                background: '#1F5F2E', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 13, fontWeight: 700, marginLeft: 'auto',
              }}>+</div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart bar */}
      <div style={{
        position: 'absolute', bottom: 14, left: 10, right: 10,
        background: '#1F5F2E', borderRadius: 12, padding: '10px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 18, height: 18, background: 'rgba(255,255,255,0.2)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff', fontWeight: 700 }}>2</div>
          <span style={{ color: '#fff', fontSize: 9.5, fontWeight: 600 }}>View Cart</span>
        </div>
        <span style={{ color: '#fff', fontSize: 10, fontWeight: 800, fontFamily: 'Manrope,sans-serif' }}>₹560</span>
      </div>
    </div>
  )
}

/* ── Checkout Screen ── */
function CheckoutScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F6F5F3', fontFamily: 'Inter, sans-serif', overflowY: 'hidden' }}>
      <div style={{ height: 44 }} />

      {/* Header */}
      <div style={{ background: '#fff', padding: '12px 14px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontSize: 14 }}>←</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#111', fontFamily: 'Manrope,sans-serif' }}>Your Order</div>
      </div>

      <div style={{ padding: '12px' }}>
        {/* Order summary */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '12px', marginBottom: 10, border: '1px solid #F3F4F6' }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#8A8F98', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Order Summary · Table 4</div>
          {[
            { name: 'Butter Chicken', qty: 1, price: '₹320' },
            { name: 'Veg Biryani', qty: 2, price: '₹480' },
          ].map(item => (
            <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #F9FAFB' }}>
              <div>
                <div style={{ fontSize: 9.5, fontWeight: 600, color: '#111' }}>{item.name}</div>
                <div style={{ fontSize: 8, color: '#8A8F98' }}>Qty: {item.qty}</div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#111', fontFamily: 'Manrope,sans-serif' }}>{item.price}</div>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 6, borderTop: '1px solid #E5E7EB' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#111' }}>Total</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: '#1F5F2E', fontFamily: 'Manrope,sans-serif' }}>₹800</span>
          </div>
        </div>

        {/* Payment options */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '12px', marginBottom: 10, border: '1px solid #F3F4F6' }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#8A8F98', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Pay With</div>
          {[
            { icon: '📱', label: 'UPI / GPay', selected: true },
            { icon: '💳', label: 'Card', selected: false },
          ].map(opt => (
            <div key={opt.label} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px',
              borderRadius: 8, marginBottom: 4,
              background: opt.selected ? '#F0FDF4' : '#F9FAFB',
              border: `1px solid ${opt.selected ? '#B7E4B8' : '#F3F4F6'}`,
            }}>
              <span style={{ fontSize: 12 }}>{opt.icon}</span>
              <span style={{ fontSize: 9.5, fontWeight: 600, color: opt.selected ? '#1F5F2E' : '#5F6368' }}>{opt.label}</span>
              {opt.selected && <div style={{ marginLeft: 'auto', width: 12, height: 12, borderRadius: '50%', background: '#1F5F2E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color: '#fff' }}>✓</div>}
            </div>
          ))}
        </div>

        {/* Place order button */}
        <div style={{
          background: '#1F5F2E', borderRadius: 12, padding: '12px',
          textAlign: 'center', color: '#fff',
        }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, fontFamily: 'Manrope,sans-serif' }}>Place Order · ₹800</div>
          <div style={{ fontSize: 8, opacity: 0.75, marginTop: 2 }}>Instant confirmation</div>
        </div>
      </div>
    </div>
  )
}

/* ── Order Details Screen (uses real screenshot) ── */
function OrderDetailsScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', overflow: 'hidden' }}>
      <img
        src={orderDetailsImg}
        alt="Order Details"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
      />
    </div>
  )
}

/* ── Menu Browse Screen (uses real screenshot) ── */
function MenuBrowseScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', overflow: 'hidden' }}>
      <img
        src={menuImg}
        alt="Menu"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
      />
    </div>
  )
}

/* ── Analytics Screen ── */
function AnalyticsScreen() {
  const bars = [42, 68, 55, 88, 74, 92, 78]
  return (
    <div style={{ width: '100%', height: '100%', background: '#0d1117', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ height: 44 }} />

      {/* Header */}
      <div style={{ padding: '10px 14px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>ScanDine Analytics</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', fontFamily: 'Manrope,sans-serif' }}>The Spice Garden</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 6, height: 6, background: '#6FCF97', borderRadius: '50%' }} />
            <span style={{ fontSize: 8, color: '#6FCF97', fontWeight: 600 }}>LIVE</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '10px 12px' }}>
        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
          {[
            { label: 'Orders', val: '247', delta: '+12%', col: '#6FCF97' },
            { label: 'Revenue', val: '₹42k', delta: '+8%', col: '#6FCF97' },
            { label: 'Rating', val: '4.8⭐', delta: '+0.4', col: '#FBBF24' },
            { label: 'Tables', val: '32/40', delta: '80%', col: '#60A5FA' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '8px 9px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', fontFamily: 'Manrope,sans-serif', marginBottom: 2 }}>{s.val}</div>
              <div style={{ fontSize: 8, color: s.col, fontWeight: 600 }}>{s.delta}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px', marginBottom: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Hourly Orders</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 44 }}>
            {bars.map((h, i) => (
              <div key={i} style={{
                flex: 1, height: `${h}%`,
                background: i === 5 ? 'linear-gradient(180deg,#4ade80,#1F5F2E)' : 'rgba(31,95,46,0.28)',
                borderRadius: '3px 3px 0 0',
              }} />
            ))}
          </div>
        </div>

        {/* Recent orders */}
        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: 7 }}>Recent Orders</div>
          {[
            { t: 'T-04', item: 'Butter Chicken', amt: '₹840', s: 'New', c: '#6FCF97' },
            { t: 'T-07', item: 'Biryani Set', amt: '₹1,240', s: 'Prep', c: '#FBBF24' },
          ].map(o => (
            <div key={o.t} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 20, height: 20, background: 'rgba(31,95,46,0.25)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6.5, color: '#6FCF97', fontWeight: 700 }}>{o.t}</div>
                <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>{o.item}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 8.5, fontWeight: 800, color: '#fff', fontFamily: 'Manrope,sans-serif' }}>{o.amt}</span>
                <span style={{ fontSize: 7, padding: '2px 5px', borderRadius: 4, background: `${o.c}20`, color: o.c, fontWeight: 700 }}>{o.s}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Floating Callout Label ── */
function Callout({ label, icon, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        background: '#fff',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        padding: '9px 14px',
        boxShadow: '0 8px 28px rgba(0,0,0,0.11)',
        display: 'flex', alignItems: 'center', gap: 7,
        zIndex: 10,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <span style={{ fontSize: 14 }}>{icon}</span>
      <span style={{ fontSize: 11.5, fontWeight: 700, color: '#111', fontFamily: 'Manrope,sans-serif' }}>{label}</span>
    </motion.div>
  )
}

/* ── Step Section ── */
function StepSection({ step, badge, title, desc, bullets, align = 'left', children, bg = '#fff', id }) {
  const isLeft = align === 'left'
  return (
    <section style={{ background: bg, padding: '100px 0' }} id={id}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
          className="showcase-grid"
        >
          {/* Text side */}
          <div style={{ order: isLeft ? 0 : 1 }} className="showcase-text">
            <motion.div {...fadeUp(0)}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: '#DDF5E1', color: '#1F5F2E',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: 9999, marginBottom: 20,
              }}>{badge}</div>
            </motion.div>
            <motion.h2 {...fadeUp(0.07)} style={{
              fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, color: '#111',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 16,
              fontFamily: 'Manrope, sans-serif',
            }}>{title}</motion.h2>
            <motion.p {...fadeUp(0.13)} style={{ fontSize: 16, color: '#5F6368', lineHeight: 1.72, marginBottom: 28, maxWidth: 460 }}>{desc}</motion.p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bullets.map((b, i) => (
                <motion.div key={b.text} {...fadeUp(0.18 + i * 0.06)} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: '#DDF5E1', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#1F5F2E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: '#111', fontFamily: 'Manrope,sans-serif', marginBottom: 2 }}>{b.text}</div>
                    {b.sub && <div style={{ fontSize: 13.5, color: '#8A8F98', lineHeight: 1.55 }}>{b.sub}</div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Devices side */}
          <div style={{ order: isLeft ? 1 : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="showcase-devices">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════ */
export default function MobileShowcase() {
  return (
    <>
      {/* ── Section Header ── */}
      <section style={{ background: '#F6F5F3', padding: '80px 0 0' }}>
        <div className="container">
          <motion.div className="section-header" {...fadeUp(0)} style={{ marginBottom: 0, paddingBottom: 0 }}>
            <div className="section-badge">✦ See It In Action</div>
            <h2 className="section-title">The complete restaurant experience</h2>
            <p className="section-desc">
              From scan to payment — see exactly how customers order and how your team manages everything, in real time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Step 1: Customer Scans & Browses ── */}
      <StepSection
        step={1}
        badge="Step 1 · Customer"
        title="Scan QR. Browse the full menu instantly."
        desc="No app download. No waiting for a waiter. Customers scan the table QR, see your full menu in seconds, and start ordering — all from their own phone."
        bullets={[
          { text: 'Instant QR Menu', sub: 'Beautiful digital menu loads in under 2 seconds' },
          { text: 'Category filtering & search', sub: 'Customers find dishes fast — veg, non-veg, drinks' },
          { text: 'Rich photos & descriptions', sub: 'Showcase your food at its best, every table' },
        ]}
        align="left"
        bg="#F6F5F3"
        id="showcase-scan"
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: 0 }}>
          {/* Main phone */}
          <IPhoneFrame rotate={-3} floatOffset={10} delay={0.1} glowColor="#1F5F2E">
            <MenuBrowseScreen />
          </IPhoneFrame>

          {/* Floating callouts */}
          <Callout label="Instant QR Menu" icon="📱" style={{ top: -16, right: -20 }} />
          <Callout label="No App Needed" icon="✨" style={{ bottom: 48, left: -32 }} />
        </div>
      </StepSection>

      {/* ── Step 2: Customer Places Order ── */}
      <StepSection
        step={2}
        badge="Step 2 · Ordering"
        title="Add to cart, pay in seconds."
        desc="Customers build their order, choose payment — UPI, card, or wallet — and confirm. The order goes straight to your kitchen. Zero friction, zero wait."
        bullets={[
          { text: 'One-tap add to cart', sub: 'Smooth, fast, intuitive ordering flow' },
          { text: 'UPI, card & wallet payments', sub: 'Every payment method, built-in' },
          { text: 'Instant order confirmation', sub: 'Customer sees confirmation, kitchen gets pinged' },
        ]}
        align="right"
        bg="#fff"
        id="showcase-order"
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          <IPhoneFrame rotate={3} floatOffset={12} delay={0.15} glowColor="#1F5F2E">
            <CheckoutScreen />
          </IPhoneFrame>

          <Callout label="Fast Checkout" icon="⚡" style={{ top: -10, left: -28 }} />
          <Callout label="Secure Payment" icon="🔒" style={{ bottom: 40, right: -30 }} />
        </div>
      </StepSection>

      {/* ── Step 3: Restaurant Receives Order ── */}
      <StepSection
        step={3}
        badge="Step 3 · Staff"
        title="Orders appear instantly. Staff stays in control."
        desc="The moment a customer confirms, your kitchen display lights up. Staff see every detail — table, items, special requests — and can update order status in real time."
        bullets={[
          { text: 'Live order notifications', sub: 'Zero delay from customer confirm to kitchen' },
          { text: 'Order status updates', sub: 'New → Preparing → Ready → Served' },
          { text: 'Full order details', sub: 'Items, quantities, notes — nothing missed' },
        ]}
        align="left"
        bg="#F6F5F3"
        id="showcase-kitchen"
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IPhoneFrame rotate={-4} floatOffset={8} delay={0.1} glowColor="#6FCF97">
            <OrderDetailsScreen />
          </IPhoneFrame>

          <Callout label="Live Orders" icon="🔔" style={{ top: -14, right: -28 }} />
          <Callout label="Real-Time Tracking" icon="📊" style={{ bottom: 52, left: -36 }} />
        </div>
      </StepSection>

      {/* ── Step 4: Analytics ── */}
      <StepSection
        step={4}
        badge="Step 4 · Growth"
        title="Analytics that actually grow your revenue."
        desc="Every order feeds your dashboard. See live revenue, bestselling dishes, peak hours, and table performance — then make smarter decisions every single day."
        bullets={[
          { text: 'Revenue & order metrics', sub: 'Hourly, daily, weekly — always in real time' },
          { text: 'Bestseller & trend tracking', sub: 'Know which dishes drive the most profit' },
          { text: 'AI-powered peak hour insights', sub: 'Forecast demand, staff smarter, serve faster' },
        ]}
        align="right"
        bg="#fff"
        id="showcase-analytics"
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
          <IPhoneFrame rotate={4} floatOffset={10} delay={0.1} glowColor="#4ade80">
            <AnalyticsScreen />
          </IPhoneFrame>

          <Callout label="AI Insights" icon="🤖" style={{ top: -12, left: -32 }} />
          <Callout label="Analytics Dashboard" icon="📈" style={{ bottom: 44, right: -28 }} />
        </div>
      </StepSection>

      {/* ── Responsive CSS injected ── */}
      <style>{`
        @media (max-width: 960px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .showcase-text { order: 0 !important; text-align: center; }
          .showcase-devices { order: 1 !important; }
        }
        @media (max-width: 540px) {
          .showcase-devices > div { transform: scale(0.82) !important; transform-origin: center top; }
        }
      `}</style>
    </>
  )
}
