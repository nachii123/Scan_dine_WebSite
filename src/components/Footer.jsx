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
        {/* Keep in Touch Card */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(31,95,46,0.12)',
          borderRadius: 28,
          boxShadow: '0 24px 60px rgba(31,95,46,0.10)',
          padding: '44px 40px',
          margin: '16px auto 48px',
          maxWidth: 1040,
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 28px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1F5F2E', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>Keep In Touch With Us</div>
            <h3 style={{ fontSize: 30, lineHeight: 1.18, color: '#111111', marginBottom: 18, fontFamily: 'Manrope, sans-serif' }}>
              Have questions, feedback, or want to collaborate with us?
            </h3>
            <p style={{ fontSize: 15.5, color: '#5F6368', lineHeight: 1.9, maxWidth: 650, margin: '0 auto' }}>
              Feel free to connect anytime. Our team is ready to help you transform your restaurant with ScanDine.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 22,
            marginTop: 30,
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: 14, background: '#E8F4EA', display: 'grid', placeItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.4 8.2L11.3 12.7C12.2 13.5 13.5 13.5 14.4 12.7L17.6 9.9" stroke="#1F5F2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 4.5H20V19.5H4V4.5Z" stroke="#1F5F2E" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, color: '#5F6368', marginBottom: 4 }}>Email</div>
                <a href="mailto:nachiket919156@gmail.com" style={{ fontSize: 16, color: '#111111', fontWeight: 700, textDecoration: 'none' }}>
                  nachiket919156@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: 14, background: '#E8F4EA', display: 'grid', placeItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 5.5H8.5L11.5 9.5L9 12L6.5 10.5L4.5 12V5.5Z" fill="#1F5F2E"/>
                  <path d="M19.5 18.5H15.5L12.5 14.5L15 12L17.5 13.5L19.5 12V18.5Z" fill="#1F5F2E"/>
                  <path d="M9 12L15 12" stroke="#1F5F2E" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, color: '#5F6368', marginBottom: 4 }}>Call</div>
                <a href="tel:+919075670374" style={{ fontSize: 16, color: '#111111', fontWeight: 700, textDecoration: 'none' }}>
                  +91 90756 70374
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href="https://wa.me/919075670374"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  padding: '14px 18px',
                  borderRadius: 16,
                  background: '#1F5F2E',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(31,95,46,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.75 7.25C16.4448 7.25 16.1947 7.45035 16.1364 7.74517C16.0846 8.01278 15.8467 9.03866 15.6147 9.86198C15.3963 10.6398 14.92 11.2442 14.3567 11.6495C13.8642 11.9982 13.2833 12.1995 12.6758 12.2442C12.4561 12.256 12.2525 12.3467 12.1056 12.4946L10.5859 14.0143C9.94238 13.7824 8.88283 13.3378 8.26374 12.6196C7.5843 11.821 7.29608 10.9765 7.177 10.4288C7.14421 10.2207 7.18868 10.0106 7.30826 9.82933L8.07593 8.73924C8.26294 8.45889 8.255 8.1023 8.05154 7.82601L7.03613 6.17805C6.76993 5.79462 6.62439 5.32736 6.63031 4.84705C6.65158 3.56328 7.99766 2.57142 9.28748 3.03479L10.6284 3.52781C11.1009 3.69115 11.5349 3.98784 11.8825 4.38814L12.1172 4.72222C12.4299 5.0949 13.0218 5.07362 13.294 4.65743L13.9919 3.52422C14.4615 2.82217 15.4059 2.64522 16.0566 3.20589L17.6912 4.70641C18.0836 5.02731 18.3767 5.50376 18.5189 6.0442C18.6013 6.36958 18.5093 6.72183 18.276 7.00002L16.7498 8.75C16.6197 8.90865 16.3936 9 16.1579 9H16.75Z" fill="white"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 13.5, color: '#8A8F98', margin: 0 }}>
              © {new Date().getFullYear()} ScanDine Technologies Pvt. Ltd. All rights reserved.
            </p>
            {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <a href="mailto:nachiket919156@gmail.com" style={{ fontSize: 13.5, color: '#1F5F2E', fontWeight: 600, textDecoration: 'none' }}>
                nachiket919156@gmail.com
              </a>
              <a href="tel:+919075670374" style={{ fontSize: 13.5, color: '#1F5F2E', fontWeight: 600, textDecoration: 'none' }}>
                +91 90756 70374
              </a>
            </div> */}
          </div>
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
