import React from 'react'
//import './PS-LeftText.css';
import DescCentered from '../SectionDescs/DescCentered'

const CenteredSection = props => {
  console.log('props', props)
  const { info, className, buttonStyle } = props

  return (
    <div className={`horizontal-section ${className}`}>
      <div className="section section__centered">
        <DescCentered
          header={info.header}
          desc={info.desc}
          button={info.button}
          buttonStyle={buttonStyle}
        >
          {props.children}
        </DescCentered>
      </div>
    </div>
  )
}
export default CenteredSection
