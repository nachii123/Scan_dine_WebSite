const QRLogo = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1" stroke="#1F5F2E" strokeWidth="1.5"/>
    <rect x="3" y="3" width="2" height="2" fill="#1F5F2E"/>
    <rect x="11" y="1" width="6" height="6" rx="1" stroke="#1F5F2E" strokeWidth="1.5"/>
    <rect x="13" y="3" width="2" height="2" fill="#1F5F2E"/>
    <rect x="1" y="11" width="6" height="6" rx="1" stroke="#1F5F2E" strokeWidth="1.5"/>
    <rect x="3" y="13" width="2" height="2" fill="#1F5F2E"/>
    <rect x="11" y="11" width="2" height="2" fill="#1F5F2E"/>
    <rect x="15" y="11" width="2" height="2" fill="#1F5F2E"/>
    <rect x="11" y="15" width="6" height="2" fill="#1F5F2E"/>
    <rect x="13" y="13" width="2" height="2" fill="#1F5F2E"/>
  </svg>
)

const COLS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#F6F5F3', borderTop: '1px solid #E5E7EB', paddingTop: 72, paddingBottom: 48 }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: 64 }}>
          {/* Brand column */}
          <div>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <div style={{ width: 32, height: 32, background: '#DDF5E1', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(31,95,46,0.12)' }}>
                <QRLogo />
              </div>
              <span style={{ fontFamily: 'Manrope,sans-serif', fontWeight: 800, fontSize: 16, color: '#111', letterSpacing: '-0.03em' }}>ScanDine</span>
            </a>
            <p style={{ fontSize: 14, color: '#8A8F98', lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
              The modern QR dining platform trusted by 500+ restaurants across India.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { label: 'Twitter/X', path: 'M4 4l8 8m0-8L4 12' },
                { label: 'LinkedIn',  path: 'M3 7v8M3 4.5v.01M7 10v5M7 7c0-1 1-2 3-2s3 1 3 2v5' },
                { label: 'Instagram', path: 'M8 8m-3 0a3 3 0 106 0 3 3 0 00-6 0M13 4.5v.01M3 3h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z' },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 36, height: 36, background: '#fff', border: '1px solid #E5E7EB',
                    borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#B7E4B8'; e.currentTarget.style.background = '#F0FDF4'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.background = '#fff'; }}
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d={path} stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 18 }}>{title}</div>
              <ul style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13.5, color: '#8A8F98' }}>
            © {new Date().getFullYear()} ScanDine Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" style={{ fontSize: 13.5, color: '#8A8F98', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target.style.color = '#111')}
                onMouseLeave={e => (e.target.style.color = '#8A8F98')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
