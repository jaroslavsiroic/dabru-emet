import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import british from '../img/GB.svg'
import polish from '../img/PL.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  onFlagClick = () => {

  }

  render() {
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
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
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
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <div className="navbar-start has-text-centered">
                {/* <Link className="navbar-item" to="/about">
                  O nas
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link> */}
                <Link className="navbar-item" to="/contact">
                  Kontakt
                </Link>
              </div>
              {/* 
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" onClick={this.onFlagClick}>
                  <img className="lang-icon-border" src={british} alt="Change Language" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" onClick={this.onFlagClick}>
                  <img className="lang-icon-border" src={polish} alt="Change Language" />
                </span>
              </a>
            */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
