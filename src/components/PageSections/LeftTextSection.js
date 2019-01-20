import React from 'react'
//import './PS-LeftText.css';
import DescFlushLeft from '../SectionDescs/DescFlushLeft'

const LeftTextSection = props => {
  const { info } = props
  // console.log(props)
  return (
    <div className={`section-textleft ${info}`}>
      <DescFlushLeft header={info.header} desc={info.desc} button={info.button} />
      <div className="section-textleft__image">
        <img src={info.imageUrl} alt={info.alt} className="section__image-image" />
      </div>
    </div>
  )
}
export default LeftTextSection
