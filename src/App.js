import React from "react";
import './index.css'
import styles from "./styles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div  className={`${styles.boxWidth}`}>
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
