export function apicall(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
      console.log(json); 
   return getData(json)
})

}
function getData(json){
      console.log("dataaa");

      return{
          type:"GETDATA",
          payload:json
      }
  }

  getData();
