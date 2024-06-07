import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoForm from './components/TodoForm';

App.use(express.urlencoded({ extended: true }));

App.set("view engine");

//Get Method
App.get('/', (re1, res) => {res.rednder(TodoForm)})

//Post Method
App.post('/',(req, res) => {
  console.log(req.body);
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
