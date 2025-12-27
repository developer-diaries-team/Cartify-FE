import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '60px',
      backgroundColor: '#282c34',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxSizing: 'border-box',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      {/* Logo */}
      <div style={{ color: '#61dafb', fontWeight: 'bold', fontSize: '1.5rem' }}>
        MYLOGO
      </div>

      {/* Hamburger Icon (Visible only on Mobile via CSS) */}
      <div className="menu-icon" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none' }}>
        <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '5px 0' }}></div>
        <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '5px 0' }}></div>
        <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '5px 0' }}></div>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;