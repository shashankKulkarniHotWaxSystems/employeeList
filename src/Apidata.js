import React from 'react'
import { useSelector} from "react-redux";

export const Apidata = () => {
    var myState2 = useSelector((state)=> state.apiCallReducer.employes[0])
   console.log(myState2);

    return (
        <div>
            <div>
                <h1>Api Data</h1>
                <div>
                    <table>
                        <thead>
                            <tr className="headtr">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mob.No.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
        myState2.map(employe =>{
          return(
            <tr>
        <td>{employe.name}</td>
        <td>{employe.email}</td>
        <td>{employe.phone}</td>
        </tr>
          )
        })
      }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
