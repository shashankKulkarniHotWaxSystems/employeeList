import React from 'react'
import './App.css';
import { useSelector} from "react-redux";
import { useEffect } from 'react';
import './EmployeeList.css'
import { AddEmployee } from './AddEmployee';

 const EmployeeList = () => {
  useEffect(()=> {

    document.getElementById("msgid").style.marginLeft="0px";

    setTimeout(() => {
    document.getElementById("msgid").style.marginLeft="-2000px";

    }, 2000);
   

})
 
    var myState = useSelector((state) => state.addNewEmployeeMethod.employes)
    console.log("mystate");
    console.log(myState);
  

    return (
      <div className="EmployeeList">
      <div><h1 className="headingEL" >Employe List</h1></div>
      <div className="msgclass" id="msgid" ><h3>Data Uploaded Successfully</h3></div>
      <table>
      <thead>
      <tr className="headtr" >
        <th >Name</th>
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