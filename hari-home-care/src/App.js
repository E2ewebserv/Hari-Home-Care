import "./App.css";
import Home from './Screen/Home';
import About from './Screen/About';
import WashingMachine from './Screen/WashingMachine';
import FridgeService from './Screen/FridgeService';
import AcService from './Screen/AcService';
import Contact from './Screen/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/WashingMachine" element={<WashingMachine/>}/>
          <Route exact path="/FridgeService" element={<FridgeService/>}/>
          <Route exact path="/AcService" element={<AcService/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
