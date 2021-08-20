import React from 'react'
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import EmployeeList from './EmployeeList';
import { AddEmployee } from './AddEmployee';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './EmployeeList.css'






function App() {
  const dispatch = useDispatch();

  const myState = useSelector((state) => state.changeTheNumber)

  return (
    <Router>
    <div className="App">
    <Link to="/employeelist/addemployee">
      <button className="btn">Add Employee</button>
    </Link>
    <EmployeeList/>
    <Switch>
    <Route exact path="/employeelist/addemployee" component={AddEmployee} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
