var result = "";
export const AddEmployeeAction=(employeData)=>{
  console.log(result);
   // console.log("methodd"+employedata);
    return{
        type:"ADDEMPLOYEE",
        payload:employeData
    }
}


