import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/auth"
import TeamDescription from "../templates/teams/teamDescription";
import Redirect from "../templates/auth/redirect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/teams/:id" element={<TeamDescription/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
