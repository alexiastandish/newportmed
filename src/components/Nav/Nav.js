import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import Backdrop from '../Backdrop/Backdrop'
import NavItem from './NavItem'
import siteContent from '../../siteContent'

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

    return (
      <nav className="navbar ">
        <div className="navbar__logo-box">
          <Link to="/">
            <img src={logo} alt="logo" className="navbar__logo" />
          </Link>
        </div>

        <div>
          <Hamburger click={() => this.drawerToggleClickHandler()} />
          {mobileMenu}
          {backdrop}
        </div>

        {this.state.sideDrawerOpen && <MobileMenu click={() => this.drawerToggleClickHandler()} />}

        <ul className="navbar__list clearfix">
          {siteContent.navLinks.map(navChild => {
            return (
              <NavItem
                key={navChild.displayName}
                displayName={navChild.displayName}
                param={navChild.param}
                navChildren={navChild.navChildren}
                className={navChild.className}
              />
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Nav
