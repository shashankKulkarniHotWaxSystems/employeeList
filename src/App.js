import React from 'react'
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import EmployeeList from './EmployeeList';
import { AddEmployee } from './AddEmployee';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './EmployeeList.css'
import { apicall } from './actions/index';
import { Apidata } from './Apidata';






function App() {
  const dispatch = useDispatch();

 function callTheApi(){
   
  dispatch(apicall());
   

 }



  return (
    <Router>
    <div className="App">
    <span>
    <Link to="/apidata" >
    <button className="btn" onClick={callTheApi()} >Show Data</button>
    </Link>
    <Link to="/employeelist/addemployee">
      <button className="btn">Add Employee</button>
    </Link>
    </span>
    <EmployeeList/>
    <Switch>
    <Route exact path="/employeelist/addemployee" component={AddEmployee} />
    <Route exact path="/apidata" component={Apidata} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
