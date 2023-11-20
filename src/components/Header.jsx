import React from 'react'

function Header(props) {
  return (
    <div style={{
      display: "flex",
      border: "solid 2px black",
      // borderRadius: "20px",
      marginBottom: "5px",
      bordercolor:'blue',
      width: '500px',
      textAlign: 'center',
    }}className='box'> <h3>{props.txt}</h3></div>
  ) 
}

export default Header