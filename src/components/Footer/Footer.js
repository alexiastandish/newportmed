import React from 'react'
import './Footer.scss'
import bwlogo from '../../img/bwlogo.png'

const Footer = props => {
  return (
    <div className={`horizontal-section ${props.className} `}>
      <div className="section section__not-centered footer__info">
        <section>
          <img src={bwlogo} alt="logo" className="footer__logo" />
          <div className="footer__info">
            <p>Joshua K. King</p>
            <p>888.888.8888</p>
          </div>
        </section>
        <section style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="address" style={{ marginBottom: '1rem', marginRight: '3rem' }}>
            <p>9382 Address Drive</p>
            <p>Santa Monica, CA 83291</p>
          </div>
          <div className="address">
            <p>9382 Address Drive</p>
            <p>Frisco, TX 28493</p>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Footer
