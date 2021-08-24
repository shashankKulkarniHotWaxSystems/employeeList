const initialstate = {
    employes:[
       
        
    ]
};
const apiCallReducer=(state = initialstate, action)=>{
    console.log(action.payload);
    switch(action.type){
        case"GETDATA":
        console.log("hello iam apicall reducer");

        return{
            ...state,
            employes:[action.payload,...state.employes]
        }

        default : 
        return state
            
        
    }

}

export default apiCallReducer;