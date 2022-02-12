import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example1 from "./components/example1"
import Example from "./conditionalrendering/example"
import NameList from "./Lists/practice1" 
import Names from "./Lists/practice2"
import Logical from "./Forms/logical"

ReactDOM.render(
  <React.StrictMode>
    <Logical/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
