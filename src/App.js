import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import HomeView from './components/HomeView'

function App() {
  const [message, setMessage] = useState();

  return (
    <div>
      <h1>To-Do List</h1>
        <Router>
          <Routes>
            <Route path='/' element={<HomeView />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
