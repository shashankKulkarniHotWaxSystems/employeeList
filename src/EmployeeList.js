import React from 'react'
import './App.css';
import { useSelector} from "react-redux";
import { useEffect } from 'react';
import './EmployeeList.css'

 const EmployeeList = () => {
  useEffect(()=>{alert("Data Uploaded Successfully")
  // return ()=>{
  //   console.log("");
  // }
},[])
 
    var myState = useSelector((state) => state.addNewEmployeeMethod.employes)
    console.log("mystate");
    console.log(myState);
  

    return (
      <div className="EmployeeList">
      <div><h1 className="headingEL" >Employe List</h1></div>
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