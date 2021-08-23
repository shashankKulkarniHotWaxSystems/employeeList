import React from 'react'
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import EmployeeList from './EmployeeList';
import { AddEmployee } from './AddEmployee';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './EmployeeList.css'
import { apicall } from './actions/getData';






function App() {
  const dispatch = useDispatch();

 const callTheApi=()=>{
   dispatch(apicall("hello"));
   

 }

  const myState = useSelector((state) => state.changeTheNumber)

  return (
    <Router>
    <div className="App">
    <span>
    <button className="btn" onClick={apicall()} >Show Data</button>
    <Link to="/employeelist/addemployee">
      <button className="btn">Add Employee</button>
    </Link>
    </span>
    <EmployeeList/>
    <Switch>
    <Route exact path="/employeelist/addemployee" component={AddEmployee} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
