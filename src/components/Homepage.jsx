import React from 'react'
import Header from './Header'
import Searchbar from './Searchbar'
import Employeelist from './Employeelist'

function Homepage(props) {
 

  return (
    <div>
          <div className='headerclass' style={{
       
        border: "solid 2px black",
        // borderRadius: "20px",
        marginBottom: "5px",
        borderColor: 'orange',
        height: '1000 px'
      }}><Header txt={"Employee Directory"} />
      <Searchbar />
      <Employeelist /></div>
    </div>
  )
}

export default Homepage