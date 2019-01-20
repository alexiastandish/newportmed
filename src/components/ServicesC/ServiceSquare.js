import React from 'react'
import { Link } from 'react-router-dom'
//import './.css';

const ServiceSquare = props => {
  console.log('props', props)
  const { service } = props
  return (
    <div className="service-square">
      <h3 className="heading-secondary">{service.header}</h3>
      <p className="paragraph">{service.desc}</p>
      <Link to={`/${service.param}`} className="btn-link square">
        {service.button}
        <span>&rarr;</span>
      </Link>
    </div>
  )
}
export default ServiceSquare
