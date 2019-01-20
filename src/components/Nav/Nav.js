import React, { Component } from 'react'
import logo from '../../img/logo.png'
import { HashLink as Link } from 'react-router-hash-link'
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import Backdrop from '../Backdrop/Backdrop'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      sideDrawerOpen: false,
      // aboutDropdown: [
      //   {
      //     id: 0,
      //     title: 'NewportMed Effect',
      //     selected: false,
      //     param: '/newportmed-effect',
      //   },
      //   {
      //     id: 1,
      //     title: 'NewportMed',
      //     selected: false,
      //     param: '/newportmed-two',
      //   },
      // ],
    }
  }

  drawerToggleClickHandler() {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  render() {
    let backdrop
    let mobileMenu
    if (this.state.sideDrawerOpen) {
      mobileMenu = <MobileMenu />
      backdrop = <Backdrop />
    }

    return (
      <nav className="navbar">
        <div className="navbar__logo-box">
          <img src={logo} alt="logo" className="navbar__logo" />
        </div>

        <div>
          <Hamburger click={() => this.drawerToggleClickHandler()} />
          {mobileMenu}
          {backdrop}
        </div>

        {this.state.sideDrawerOpen && <MobileMenu click={() => this.drawerToggleClickHandler()} />}

        <div className="navbar__list clearfix">
          <div className="navbar__menu-item">
            <button className="navbar__item">
              <Link to="/about">About</Link>
            </button>
            <div className="navbar__dropdown">
              <Link to="#" className="navbar__item--dropdown">
                About 1
              </Link>
              <Link to="#" className="navbar__item--dropdown">
                About 2
              </Link>
              <Link to="#" className="navbar__item--dropdown">
                About 3
              </Link>
            </div>
          </div>
          <div className="navbar__menu-item">
            <button className="navbar__item">
              <Link to="/about">Services</Link>
            </button>
            <div className="navbar__dropdown">
              <Link to="#" className="navbar__item--dropdown">
                Service 1
              </Link>
              <Link to="#" className="navbar__item--dropdown">
                Service 2
              </Link>
              <Link to="#" className="navbar__item--dropdown">
                Service 3
              </Link>
            </div>
          </div>
          <div className="navbar__menu-item">
            <button className="navbar__item">
              <Link to="/about">Our Process</Link>
            </button>
            <div className="navbar__dropdown">
              <Link to="#" className="navbar__item--dropdown">
                Process 1
              </Link>
              <Link to="#" className="navbar__item--dropdown">
                Process 2
              </Link>
              <Link to="#" className="navbar__item--dropdown">
                Process 3
              </Link>
            </div>
          </div>
          <div className="navbar__menu-item">
            <button className="navbar__item">
              <Link to="/about">Testimonials</Link>
            </button>
          </div>
          <div className="navbar__menu-item">
            <Link to="/contact" className="btn-link btn-style">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
