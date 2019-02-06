import React, { Component } from 'react'
import ServiceSquare from './ServiceSquare'
import './ServiceSection.scss'
import anime from 'animejs'

class ServiceSection extends Component {
  componentDidMount() {
    anime({
      targets: '.animeComponent',
      translateX: [250, 0],
      easing: 'easeInOutSine',
      delay: anime.stagger(100),
      opacity: {
        value: [0, 1],
        duration: 1000,
      },
    })
  }
  render() {
    const { services, className, header } = this.props
    const descLimit = 80
    return (
      <div className={`horizontal-section ${className}`}>
        <div className="section section__not-centered--services">
          {header !== undefined && (
            <section className="heading">
              <div className="heading_left">
                <span className="heading__left--main">{header}</span>
              </div>
            </section>
          )}
          {services.map(service => (
            <div key={service.header} className="homepage-services__square animeComponent">
              <ServiceSquare service={service} descLimit={descLimit} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default ServiceSection
