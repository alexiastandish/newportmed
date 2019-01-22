import React from 'react'
//import './PS-LeftText.css';
import DescFlushLeft from '../SectionDescs/DescFlushLeft'

const LeftTextSection = props => {
  console.log('props', props)
  const { info, className } = props
  console.log(info)
  return (
    <div className={`horizontal-section ${className}`}>
      <div className="section section__not-centered">
        <DescFlushLeft header={info.header} desc={info.desc} button={info.button} />
        <div className="section-textleft__image">
          <img src={info.imageUrl} alt={info.alt} className="section__image-image" />
        </div>
      </div>
    </div>
  )
}
export default LeftTextSection
