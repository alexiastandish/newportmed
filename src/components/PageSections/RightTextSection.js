import React from 'react'
//import './PS-LeftText.css';
import DescFlushLeft from '../SectionDescs/DescFlushLeft'

const RightTextSection = props => {
  const { info, className } = props
  // console.log(props)
  // e0fbfc
  // radial-gradient(#e0fbfc, #f1f2f2)
  return (
    <div
      className={`horizontal-section ${className}`}
      style={{ background: 'radial-gradient(#ffffff, #e0fbfc)' }}
    >
      <div className="section section__not-centered">
        <div className="section-textleft__image">
          <img src={info.imageUrl} alt={info.alt} className="section__image-image" />
        </div>
        <DescFlushLeft header={info.header} desc={info.desc} button={info.button} />
      </div>
    </div>
  )
}
export default RightTextSection
