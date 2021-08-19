import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store"
import { Provider } from "react-redux";
import EmployeeList from './EmployeeList'

store.subscribe(()=> console.log(store.getState()))
// console.log("indexedd"+store);
ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
    <App />
    {/* <EmployeeList/> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

