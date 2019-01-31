import React from 'react'
import DescFlushLeft from '../SectionDescs/DescFlushLeft'
import './LeftTextSection.scss'
// import sectionbg from '../../img/home/sectionbg.jpg'

const LeftTextSection = props => {
  const { info, className } = props

  return (
    <div className={`horizontal-section ${className} `}>
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
