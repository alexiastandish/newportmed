import React from 'react'
const DescCentered = props => {
  return (
    <div>
      <div className="heading__center">
        <span className="heading__center--main">{props.header}</span>
        <span className="heading__center--sub">{props.desc}</span>
      </div>

      {props.children}
      <button className={`${props.buttonStyle}`}>{props.button}</button>
    </div>
  )
}

export default DescCentered
