import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#282c34',
      color: 'white',
      padding: '2rem 20px',
      textAlign: 'center',
      boxSizing: 'border-box',
      borderTop: '1px solid #3d4451'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}>
        {/* Brand/Copyright Section */}
        <div>
          <h3 style={{ margin: '0 0 5px 0', color: '#61dafb' }}>My Brand</h3>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()}. | All rights reserved.
          </p>
        </div>

        {/* Links Section - Responsive via CSS class */}
        <div className="footer-links" style={{ 
          display: 'flex', 
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* <a href="#" style={linkStyle}>Privacy Policy</a> */}
          {/* <a href="#" style={linkStyle}>Terms of Service</a> */}
          <a href="#" style={linkStyle}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

// Reusable link style
const linkStyle: React.CSSProperties = {
  color: '#61dafb',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'opacity 0.2s'
};

export default Footer;
