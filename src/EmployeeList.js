import React from 'react'
import './App.css';
import { useSelector} from "react-redux";
// import { AddEmployeeAction } from "./actions/index";

 const EmployeeList = () => {
    var myState = useSelector((state) => state.addNewEmployeeMethod.employes)
    console.log("mystate");
    console.log(myState);
  

    return (
      <div className="App">
      <h1>employe list component</h1>
      <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mob.No.</th>
      </tr>
      </thead>
      <tbody>
      {
        myState.map(employe =>{
          return(
            <tr>
        <td>{employe.name}</td>
        <td>{employe.email}</td>
        <td>{employe.mobno}</td>
        </tr>
          )
        })
      }
      </tbody>
       
      </table>
      </div>
    );
  
}
export default EmployeeList;