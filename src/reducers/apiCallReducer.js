const initialstate = {
    employes:[
        // {
        //     name:"shashank",
        //     email:"s@test.com",
        //     mobno:"12345"
        // },
        // {
        //     name:"utkarsh",
        //     email:"u@test.com",
        //     mobno:"09876"
        // },
        // {
        //     name:"kapil",
        //     email:"k@test.com",
        //     mobno:"45678"
        // },
        // result
        
    ]
};
const apiCallReducer=(state = initialstate, action)=>{
    console.log(action.payload);
    switch(action.type){
        case"GETDATA":
        return{
            ...state,
            employes:[action.payload,...state.employes]
        }

        default : 
        return state
            
        
    }

}

export default apiCallReducer;