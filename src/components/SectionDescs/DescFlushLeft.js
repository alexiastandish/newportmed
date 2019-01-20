import React from 'react'
const DescFlushLeft = props => {
  // console.log(props)
  return (
    <section className="heading">
      <h3 className="heading-primary">
        <span className="heading-primary--main">{props.header}</span>
        <span className="heading-primary--sub">{props.desc}</span>
      </h3>
    </section>
  )
}

export default DescFlushLeft
