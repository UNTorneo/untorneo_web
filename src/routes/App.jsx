import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../templates/auth/login"
import Register from "../templates/auth/register"
import Auth from "../pages/auth/auth"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
