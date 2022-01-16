import './App.scss';
import AppNavbar from './components/App/AppNavbar'
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import PatchNotes from './pages/PatchNotes';
import Examples from './pages/Examples';
import Warnings from './pages/Warnings'
import Features from './pages/Features';
import Syntax from './pages/features/Syntax';
import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="patch-notes" element={<PatchNotes />} />
          <Route path="examples" element={<Examples />} />
          <Route path="warnings" element={<Warnings />} />
          <Route path="features" >
            <Route path="" element={<Features />} />
            <Route path="syntax" element={<Syntax />} />
          </Route>

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
