import React from 'react'
import ServiceSquare from './ServiceSquare'
import './ServiceSection.scss'

const ServiceSection = props => {
  const { services, className } = props

  return (
    <div className={`horizontal-section ${className}`}>
      <div className="section section__not-centered--services">
        {services.map(service => (
          <div key={service.header} className="homepage-services__square">
            <ServiceSquare service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ServiceSection
