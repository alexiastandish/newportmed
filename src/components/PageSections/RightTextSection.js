import React from 'react'
//import './PS-LeftText.css';
import DescFlushLeft from '../SectionDescs/DescFlushLeft'

const RightTextSection = props => {
  const { info, className } = props
  // console.log(props)
  return (
    <div className={`horizontal-section ${className}`}>
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
