import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { AddEmployeeAction } from './actions/index'
import {useHistory} from 'react-router-dom'
import './AddEmployee.css';
import { userSchema } from './validations/AdEmpValidation';


export const  AddEmployee = () => {
  var validornot = ""
  let history = useHistory();
  var dispatch = useDispatch();
   const [name, setName] = useState("");
   const [email, setemail] = useState("");
   const [mobno, setmobno] = useState("");
  
   const createEmploye = (e)=>{
     e.preventDefault(); 

    //  let formData={
    //   name: e.target[0].value ,
    //   email: e.target[1].value ,
    //   mobno: e.target[2].value 
    //   }

     console.log(name+email+mobno);
     const employeData = {
       name:name,
       email:email,
       mobno:mobno
       

     }
  
     let isValid = userSchema.isValid(employeData).then((result)=>{
      validornot = result
      if(validornot===true){
     
        dispatch(AddEmployeeAction(employeData))
        history.push("")
     }
     else{
       alert("plz enter details properly")
     }
      console.log("result"+result);
     });
     console.log(validornot);
     console.log(`all ${isValid}`);
  // if(isValid===true){
  //   alert("All Details Enterd Properly")
  // }
  let error = userSchema.validate( employeData).catch((err)=>{
    console.log(err.name);
    console.log(err.errors);
    alert(err.errors)
  })
  
 
     
   }
   

  // const myState = useSelector((state) => state.changeTheNumber)

  return (
    <div>
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
        <button className="btnAE">Save</button>
        </form>
        </div>
        </div>
  );
}
