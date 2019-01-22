import React from 'react'
const DescCentered = props => {
  // console.log(props)
  return (
    <section className="heading">
      <h3 className="heading__center">
        <span className="heading__center--main">{props.header}</span>
      </h3>
    </section>
  )
}

export default DescCentered
