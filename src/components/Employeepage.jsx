import React from 'react'
import Header from './Header'
import Employeelist from './Employeelist'

function Employeepage(props) {
  return (
    <>
    <div style={{
      display: "flex",
      border: "solid 2px black",
      borderRadius: "10px",
      marginBottom: "5px",
      height:'1000px',
      width: '500px',
      borderColor:'brown'

    }}className='employeepageclass'>
      <div>
      <Header txt={"> Employee "}/>
      {/* <Header{props.texts} */}</div>
      </div>
      </>
  )
}

export default Employeepage