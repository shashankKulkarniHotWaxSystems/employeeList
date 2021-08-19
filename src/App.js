import React from 'react'
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { AddEmployeeAction} from "./actions/index";
import EmployeeList from './EmployeeList';
import { AddEmployee } from './AddEmployee';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'






function App() {
  const dispatch = useDispatch();

  const myState = useSelector((state) => state.changeTheNumber)

  return (
    <Router>
    <div className="App">
    <Link to="/employeelist/addemployee">
      <button>Add Employee</button>
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
