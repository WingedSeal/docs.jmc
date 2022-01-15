import './App.css';
import AppNavbar from './components/App/AppNavbar'
import Home from './pages/Home';
import Warnings from './pages/Warnings'
import Features from './pages/Features';
import Syntax from './pages/features/Syntax';
//import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/warnings" element={<Warnings />} />
          <Route exact path="/features" element={<Features />} />
          <Route path="/features/syntax" element={<Syntax />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
