import React from 'react'
const DescFlushLeft = props => {
  // console.log(props)
  return (
    <section className="heading">
      <h3 className="heading__left">
        <span className="heading__left--main">{props.header}</span>
        <span className="heading__left--sub">{props.desc}</span>
      </h3>
      <button className="btn-primary">{props.button}</button>
    </section>
  )
}

export default DescFlushLeft
