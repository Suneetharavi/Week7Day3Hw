import React from 'react'

function Header(props) {
  return (
    <div style={{
      display: "flex",
      border: "solid 2px black",
      borderRadius: "20px",
      marginBottom: "5px",
      bordercolor:'blue'
    }}className='box'> {props.txt}</div>
  ) 
}

export default Header