import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import HomeView from './components/HomeView'

function App() {

  return (
    <div>
      <header>
        <HomeView />
      </header>
    </div>
  );
}

export default App;
