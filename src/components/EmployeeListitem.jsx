import React from 'react'
import empinfo from '../models/empinfo'

function EmployeeListitem({employee}) {
  return (
    <>
      {/* <p>{props.empfinfo}</p> */}

      <div
      style={{
        display: "flex",
        border: "solid 2px black",
        // borderRadius: "20px",
        marginBottom: "5px",
        borderColor: 'red'
      }}
    >
      <img
        style={{
          width: "75px",
          height: "75px",
          borderRadius: "50%",
          margin: "5px 10px 5px 5px",
        }}
        src={employee.img} alt='myimage'
      />

      <div>
        <h3>{employee.name}</h3>
        <h5>{employee.status}</h5>
      </div>
 </div>
</>

  );
}

export default EmployeeListitem;