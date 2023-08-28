import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About_Us/About_Us";
import ContactUs from "./pages/Contact_Us";
import Home from "./pages/Home/Home";

function App() {
  return(
    <Router>
  <Routes>
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/" element={<Home/>} />
  </Routes>
</Router>

  );
  
   
}

export default App;
