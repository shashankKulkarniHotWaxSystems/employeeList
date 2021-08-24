var result = "";
export const AddEmployeeAction=(employeData)=>{
  console.log(result);
   // console.log("methodd"+employedata);
    return{
        type:"ADDEMPLOYEE",
        payload:employeData
    }
}
export const apicall = ()=> async (dispatch)=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()).then(result=>{
       let re = result
       console.log(re);
       dispatch(getData(re))
    });
           
        // console.log("hello i am current action");
    }

export function getData(re){
      console.log("dataaa");
      console.log(re);

      return{
          type:"GETDATA",
          payload:re
      }
  }

//   getData();


