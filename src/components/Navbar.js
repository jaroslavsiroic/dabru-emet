import React, { useState, useContext } from 'react'
import { Link, useI18next, I18nextContext, Trans } from 'gatsby-plugin-react-i18next';
import github from '../img/github-icon.svg'
import british from '../img/GB.svg'
import polish from '../img/PL.svg'
import logo from '../img/logo.svg'

const langIcons = {
  pl: polish,
  en: british,
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  const context = useContext(I18nextContext);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');
  const { languages, changeLanguage } = useI18next();
  const toggleHamburger = () => {
    setNavBarActiveClass(!active ? 'is-active' : '');
    setActive(!active);
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Dabru Emet" style={{ width: '3.5em', maxHeight: '3.5em' }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={toggleHamburger}
            style={{
              width: '4em',
              height: '4em'
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-end has-text-centered">
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/about">
                  O nas
                </Link>
                */}
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                <Trans>Contact</Trans>
              </Link>
              <span className={`navbar-item`}>
                {languages.map((lng) => (
                  <a
                    style={{ width: "40px" }}
                    key={lng}
                    href="#"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      changeLanguage(lng);
                    }}
                  >
                    <span className={`lang-icon ${context.language === lng ? 'lang-active' : 'lang-inactive'}`}>
                      <span>{lng}</span>
                      {/* <img className={`lang-icon-border`} src={langIcons[lng]} alt="Change Language" /> */}
                    </span>
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
