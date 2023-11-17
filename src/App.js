import './App.css';
import Homepage from './components/Homepage'; 
import Employeepage from './components/Employeepage';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Employeelist from './components/Employeelist';
import EmployeeListitem from './components/EmployeeListitem';

function App() {
  return (
    <>
    <div className="App">
        <div style={{
      borderColor: 'orange',
      border: "solid 2px black",
      borderRadius: "10px",
      marginBottom: "5px",
    }}className='homepage-div'>
          <Homepage />
          {/* <Searchbar/>
          <Employeelist/>
          <EmployeeListitem/>
         */}
        </div>

      <div className="employeedisplay-div">
        <Employeepage texts=">  Employee"/>
      </div> 
      </div>


      </>
   
       
  );
}

export default App;
