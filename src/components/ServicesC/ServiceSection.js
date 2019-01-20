import React from 'react'
import ServiceSquare from './ServiceSquare'

//import './.css';

const ServiceSection = props => {
  const { services } = props
  // console.log('services', services)

  return (
    <div className={`section-services primary`}>
      {services.map(service => (
        <div key={service.header}>
          <ServiceSquare service={service} />
        </div>
      ))}
    </div>
  )
}
export default ServiceSection
