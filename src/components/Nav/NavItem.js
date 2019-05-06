import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { NavHashLink as NavLink } from 'react-router-hash-link'

class NavItem extends Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
    }
  }

  activateMenuItem = () => {
    this.setState({ isActive: true })
  }
  deactivateMenuItem = () => {
    this.setState({ isActive: false })
  }

  render() {
    return (
      <li
        className="navbar__nav-item"
        onMouseEnter={this.activateMenuItem}
        onMouseLeave={this.deactivateMenuItem}
      >
        <Link to={this.props.param} className={`navbar__link ${this.props.className}`}>
          {this.props.displayName}
        </Link>
        {this.state.isActive && this.props.navChildren.length > 0 && (
          <ul className="navbar__dropdown">
            {this.props.navChildren.map((navChild, index) => {
              return (
                <li key={index}>
                  <Link
                    to={{
                      pathname: `${navChild.param}`,
                      state: `${navChild.hash}`,
                    }}
                    className="navbar__item--dropdown"
                  >
                    {navChild.displayName}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </li>
    )
  }
}

NavItem.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  navChildren: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      param: PropTypes.string.isRequired,
    })
  ),
}

NavItem.defaultProps = {
  className: '',
  navChildren: [],
}

export default NavItem
