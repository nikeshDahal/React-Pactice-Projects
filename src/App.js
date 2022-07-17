import React, { useState } from "react";

import NewsBucket from "./components/News-Bucket/NewsBucket"; //main news componenet
import About from "./components/About/About";
import { Route, Routes  , Navigate } from "react-router-dom";
import Header from "./components/Navbar/Header";

// const [category, setCategoryState] = useState('');


function App() {
 
  return (
    <div >
      <Header/> {/*here i passes the setCategory function pointer to execute it from header component*/}
      {/* <Header onSetCategory={setCategoryState} /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace/>}/>
        <Route path="/Home" element={<NewsBucket  />} />
        <Route path="/About" element={<About />} />
      </Routes> 
    </div>
  );
}
export default App;
