import React from 'react'
import Header from './Header'
import Employeelist from './Employeelist'
import empinfo from '../models/empinfo'
import EmployeeListitem from './EmployeeListitem'

function Employeepage(props) {
  return (
    <>
    <div style={{
      
      border: "solid 2px black",
      borderRadius: "10px",
      marginBottom: "5px",
      height:'1000px',
      width: '520px',
      borderColor:'brown'

    }}className='employeepageclass'>
      <div>
      <Header txt={"> Employee "}/>
      </div>
      
      <div
      style={{
        width: "500px",
        border: "solid 1px black",
        padding: "10px",
      }}
    >
      <div>
        <EmployeeListitem employee={empinfo[0]} />
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>Call Office</h5>
        <h6>781 000 0002</h6>
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>Call Mobile</h5>
        <h6>617 645 0002</h6>
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",  
        }}
      >
        <h5>SMS</h5>
        <h6>617 000 0002</h6>
      </div>
      <div>
        <h5>Email</h5>
        <h6>fghdg@gmail.com</h6>
      </div>
    </div>







      </div>
      </>
  )
}

export default Employeepage