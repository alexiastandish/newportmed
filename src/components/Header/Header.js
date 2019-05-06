import React from 'react'
//import './.css';

const Header = props => {
  return (
    <div className="header">
      {props.header}
      {props.desc}
    </div>
  )
}
export default Header
