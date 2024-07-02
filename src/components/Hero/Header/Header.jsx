
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpened(false); // Close the menu after scrolling
  };

  return (
    <div className="header">
      <img className='logo' src="https://i.ibb.co/pjfPpMw/icon.png" alt="icon" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            width: '1.5rem',
            height: '1.5rem',
            backgroundColor: 'var(--appcolor)',
            padding: '0.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#fff'
          }}
          onClick={() => setMenuOpened(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      ) : (
        <ul className='header-menu'>
          <li onClick={() => handleScroll('home')}>Home</li>
          <li onClick={() => handleScroll('programs')}>Programs</li>
          <li onClick={() => handleScroll('reasons')}>Why Us</li>
          <li onClick={() => handleScroll('plans')}>Plans</li>
          <li onClick={() => handleScroll('join-us')}>Join Us</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
