import DescFlushLeft from '../SectionDescs/DescFlushLeft'
import './LeftTextSection.scss'
import React, { Component } from 'react'
import Circle from '../../img/home/Circle'

class LeftTextSection extends Component {
  render() {
    const { info, className } = this.props
    return (
      <div className={`horizontal-section ${className} `}>
        <div className="section section__not-centered">
          <DescFlushLeft header={info.header} desc={info.desc} button={info.button} />
          <div className="section-textleft__image">
            {info.imageClassName === 'circleImage' && <Circle />}
            {info.imageUrl !== undefined && (
              <img
                src={info.imageUrl}
                alt={info.alt}
                className={`section__image-image ${info.imageClassName}`}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default LeftTextSection
