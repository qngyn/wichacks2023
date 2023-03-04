import logo from './logo.svg';
import './App.css';
import Posting from './Posting';
import Contact from "./Contact";
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path= "/" element={<Home/>} />
        <Route path= "posting" element={<Posting/>} />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
