import React, { useState } from 'react';
import logo from '../../assets/img/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function PageHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen((navOpenPrevious) => !navOpenPrevious);
    document.body.classList.toggle('nav-open');
  };

  const handleNavClose = () => {
    setNavOpen((navOpenPrevious) => !navOpenPrevious);
    document.body.classList.remove('nav-open');
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo from Lucas Gabriel Portfolio" />
        </div>

        <button type="button" className={navOpen ? 'nav-toggle nav-open' : 'nav-toggle'} onClick={handleNavOpen} aria-label="toggle navigation">
          <span className="hamburger" />
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><Link smooth  to="/#home" className="nav__link" onClick={handleNavClose}>Home</Link></li>
            <li className="nav__item"><Link smooth  to="/#services" className="nav__link" onClick={handleNavClose}>My Services</Link></li>
            <li className="nav__item"><Link smooth  to="/#about" className="nav__link" onClick={handleNavClose}>About me</Link></li>
            <li className="nav__item"><Link smooth  to="/#work" className="nav__link" onClick={handleNavClose}>My Work</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default PageHeader;
