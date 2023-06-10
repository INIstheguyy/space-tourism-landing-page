import React from "react";
import './index.css'
import styles from "./styles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Tech from "./components/Technology/Tech";

function App() {
  return (
    <Router>
      <div  className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destination" element={<Destination/>}></Route>
          <Route path="/crew" element={<Crew/>}></Route>
          <Route path="/tech" element={<Tech/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
