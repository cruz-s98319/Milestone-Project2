import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomeView from './components/HomeView'

function App() {
  const [message, setMessage] = useState();

  return (
    <div>
      <h1 className="text-center">To-Do List</h1>
        <HomeView />
    </div>
  );
}

export default App;
