import React from 'react';
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomeView from './components/HomeView'

function App() {

  return (
    <div>
      <h1 className="text-center">To-Do List</h1>
        <HomeView />
    </div>
  );
}

export default App;
