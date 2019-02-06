import React from 'react'
import { Link } from 'react-router-dom'
//import './.css';

const ServiceSquare = props => {
  const { service, descLimit } = props
  const itemDescription =
    service.desc.length >= descLimit ? service.desc.slice(0, descLimit) + '...' : props.service.desc
  return (
    <div className="service-square">
      <div className="service-square__top">
        <img src={service.icon} alt="service" className="service-square__image" />
        <h3 className="heading-secondary">{service.header}</h3>
        <p className="paragraph service-square__desc">{itemDescription}</p>
      </div>
      <div className="service-square__bottom">
        <Link
          to={{ pathname: service.param, hash: service.hash }}
          className="btn-tertiary service-square__service-btn"
        >
          {service.button}
        </Link>
      </div>
    </div>
  )
}
export default ServiceSquare
