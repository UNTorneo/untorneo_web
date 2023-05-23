import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MATCH } from '../../graphql/matches/queries';
import { List, ListItem, ListItemText } from '@mui/material';

const Displaymatch = () => {
    const { id } = useParams();
    const { loading: matchLoading, error:matchError, data: matchData } = useQuery(GET_MATCH,{
        variables: { getMatchId:id },
      });
    if (matchLoading) return <p>Loading...</p>;
    if (matchError) return <p>Error in Teams : {matchError.message}</p>;
    
    console.log(matchData);
    const match = matchData.getMatch;
    console.log(match);
    return (
        <div>
          <h1>Partido</h1>
          <List >
            
              <ListItem key={match.id} sx={{ '&:hover': { bgcolor: '#f5f5f5' } }}></ListItem>
              <ListItemText primary={`Estado del partido: ${match.status}`} />
              <ListItemText primary={`Id del torneo: ${match.tournamentId.id}`} />
              <ListItemText primary={`Nombre del torneo: ${match.tournamentId.name}`} />
              <ListItemText primary={`Id del equipo local: ${match.homeTeam.id}`} />
              <ListItemText primary={`Nombre del equipo local: ${match.homeTeam.name}`} />
              <ListItemText primary={`Id del equipo visitante: ${match.visitingTeam.id}`} />
              <ListItemText primary={`Nombre del equipo visitante: ${match.visitingTeam.name}`} />
              <ListItemText primary={`Puntaje del equipo local: ${match.homeTeamScore}`} />
              <ListItemText primary={`Puntaje del equipo visitante: ${match.visitingTeamScore}`} />
              <ListItemText primary={`Fecha: ${match.date}`} />
              <ListItemText primary={`Id de la cancha: ${match.courtId}`} />
              
            
          </List>
        </div>
      );
};

export default Displaymatch;