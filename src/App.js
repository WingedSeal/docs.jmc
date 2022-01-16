import './App.scss';
import AppNavbar from './components/App/AppNavbar'
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import PatchNotes from './pages/PatchNotes';
import Examples from './pages/Examples';
import Warnings from './pages/Warnings'
import Features from './pages/Features';
import Syntax from './pages/features/Syntax';
import React, { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [navActive, setNavActive] = useState('home')

  return (
    <Router basename='/docs.jmc'>
      <div className="App d-flex flex-column">
        <AppNavbar setActive={setNavActive} active={navActive} />
        <Routes>
          <Route path="/" element={<Home setNavActive={setNavActive} />} />
          <Route path="getting-started" element={<GettingStarted setNavActive={setNavActive} />} />
          <Route path="patch-notes" element={<PatchNotes />} />
          <Route path="examples" element={<Examples />} />
          <Route path="warnings" element={<Warnings />} />
          <Route path="features" >
            <Route path="" element={<Features />} />
            <Route path="syntax" element={<Syntax />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
