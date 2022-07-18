import React from "react";

import NewsBucket from "./components/News-Bucket/NewsBucket"; //main news componenet
import About from "./components/About/About";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Navbar/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<NewsBucket />} />
        <Route path="/category/:categoryId" element={<NewsBucket />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
