import React from 'react'
import EmployeeListitem from './EmployeeListitem'
import empinfo from '../models/empinfo'

function Employeelist() {
  return (
    <div style={{
    
      border: "solid 2px black",
      borderRadius: "10px",
      marginBottom: "5px",
      borderColor: 'purple'
    }}>

    {empinfo.map((employee,index) => (
      <EmployeeListitem key={index} employee={employee}/>
    ))}



         {/* {props.map((employee, index) => (
        <EmployeeListitem key={index} employee={employee} />
      ))} */}

    </div>
  );
}

export default Employeelist;