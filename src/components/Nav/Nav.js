import React, { Component } from 'react'
import logo from '../../img/logo.png'
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import Backdrop from '../Backdrop/Backdrop'
import NavItem from './NavItem'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      sideDrawerOpen: false,
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
    const navLinks = [
      {
        displayName: 'About',
        param: '/about',
        navChildren: [
          { displayName: 'About 1', param: '/about-one' },
          { displayName: 'About 2', param: '/about-two' },
          // { displayName: 'About 3', param: '/about-three' },
          // { displayName: 'About 4', param: '/about-four' },
        ],
      },
      {
        displayName: 'Services',
        param: '/services',
        navChildren: [
          { displayName: 'services 1', param: '/services-one' },
          { displayName: 'services 2', param: '/services-two' },
          { displayName: 'services 3', param: '/services-three' },
          { displayName: 'services 4', param: '/services-four' },
        ],
      },
      {
        displayName: 'Our Process',
        param: '/our-process',
        navChildren: [
          { displayName: 'Our Process 1', param: '/process-one' },
          { displayName: 'Our Process 2', param: '/process-two' },
        ],
      },
      {
        displayName: 'Testimonials',
        param: '/testimonials',
      },
    ]
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

        <ul className="navbar__list clearfix">
          {navLinks.map(navChild => {
            return (
              <NavItem
                key={navChild.displayName}
                displayName={navChild.displayName}
                param={navChild.param}
                navChildren={navChild.navChildren}
              />
            )
          })}
          {/* <li className="navbar__menu-item">
            <Link to="/services" className="navbar__link">
              Services
            </Link>

            <ul className="navbar__dropdown">
              <li>
                <Link to="#" className="navbar__item--dropdown">
                  Services 2
                </Link>
              </li>
              <li>
                <Link to="#" className="navbar__item--dropdown">
                  Services 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar__menu-item">
            <Link to="/our-process" className="navbar__link">
              Our Process
            </Link>

            <ul className="navbar__dropdown">
              <li>
                <Link to="#" className="navbar__item--dropdown">
                  Process 2
                </Link>
              </li>
              <li>
                <Link to="#" className="navbar__item--dropdown">
                  Process 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar__menu-item">
            <Link to="/testimonials" className="navbar__link">
              Testimonials
            </Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/contact" className="btn-link btn-style">
              Contact Us
            </Link>
          </li> */}
        </ul>
      </nav>
    )
  }
}

export default Nav
