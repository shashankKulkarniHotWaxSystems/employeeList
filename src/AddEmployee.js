import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { AddEmployeeAction } from './actions/index'
import {useHistory} from 'react-router-dom'
import './AddEmployee.css';


export const AddEmployee = () => {
  let history = useHistory();
  var dispatch = useDispatch();
   const [name, setName] = useState("");
   const [email, setemail] = useState("");
   const [mobno, setmobno] = useState("");
  
   const createEmploye = (e)=>{
     e.preventDefault(); 
     console.log(name+email+mobno);
     const employeData = {
       name:name,
       email:email,
       mobno:mobno
       

     }
     
     dispatch(AddEmployeeAction(employeData))
     history.push("")
     
   }
   

  // const myState = useSelector((state) => state.changeTheNumber)

  return (
    <div className="addemp">
    <h1>Add New Employee</h1>
    <form onSubmit={(e)=> createEmploye(e)}>
    <div>
      <input
       type="text" 
       placeholder="Name" 
       value={name}
       onChange={(e)=> setName(e.target.value)}
       
       />
    </div>
    <div>
      <input
       type="text" 
       placeholder="Email" 
       value={email}
       onChange={(e)=> setemail(e.target.value)}
       />
    </div>
    <div>
      <input
       type="text" 
       placeholder="MobNo" 
       value={mobno}
       onChange={(e)=> setmobno(e.target.value)}
       />
    </div>
        <button className="btn">Save</button>
        </form>
        </div>
  );
}
