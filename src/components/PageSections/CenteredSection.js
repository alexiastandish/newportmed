import React from 'react'
//import './PS-LeftText.css';
import DescCentered from '../SectionDescs/DescCentered'

const CenteredSection = props => {
  const { info, className } = props

  return (
    <div className={`horizontal-section ${className}`}>
      <div className="section">
        <section className="section__text-centered">
          <DescCentered header={info.header} desc={info.desc} button={info.button} />
          <button className="btn-primary">{info.button}</button>
        </section>
        <div className="section-textleft__image">
          <img src={info.imageUrl} alt={info.alt} className="section__image-image" />
        </div>
      </div>
    </div>
  )
}
export default CenteredSection
