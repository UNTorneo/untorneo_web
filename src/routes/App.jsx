import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/auth"
import TeamDescription from "../templates/teams/teamDescription";
import Redirect from "../templates/auth/redirect";
import TournamentDetails from '../templates/tournament/tournamentDetails';
import DisplayMatch from "../templates/matches/displayMatch";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/teams/:id" element={<TeamDescription/>}/>
        <Route path="/tournament/:id" element={<TournamentDetails/>}/>
        <Route path="/match/:id" element={<DisplayMatch/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
