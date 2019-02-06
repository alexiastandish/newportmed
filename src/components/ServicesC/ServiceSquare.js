import React from 'react'
import { Link } from 'react-router-dom'
//import './.css';

const ServiceSquare = props => {
  const { service } = props
  return (
    <div className="service-square">
      <img src={service.icon} alt="service" />
      <h3 className="heading-secondary">{service.header}</h3>
      <p className="paragraph">{service.desc}</p>
      <Link to={{ pathname: service.param, hash: service.hash }} className="btn-tertiary square">
        {service.button}
      </Link>
    </div>
  )
}
export default ServiceSquare
