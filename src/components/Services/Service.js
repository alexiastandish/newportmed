import React from 'react'
import './Services.scss'

const Service = props => {
  const { serviceInfo } = props

  return (
    <section id={props.id} className="serviceInfo">
      <div className={`${serviceInfo.layout}`}>
        <h3>{serviceInfo.header}</h3>
        <p>{serviceInfo.desc}</p>
        <img src={serviceInfo.icon} alt={serviceInfo.header} />
      </div>
    </section>
  )
}
export default Service
