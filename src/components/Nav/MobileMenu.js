import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = props => {
  return (
    <nav className="sidedrawer">
      <button onClick={props.click}>close</button>
      <ul className="sidedrawer__list">
        <li className="sidedrawer__item">
          <Link to="/about" className="sidedrawer__link">
            <span>01</span>About Us
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/services" className="sidedrawer__link">
            <span>02</span>Services
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/ourProcess" className="sidedrawer__link">
            <span>03</span>Our Process
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/testimonials" className="sidedrawer__link">
            <span>04</span>Testimonials
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default MobileMenu
