import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import { GET_MATCH } from '../../graphql/matches/queries';
import { List, ListItem, ListItemText } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import { experimentalStyled as styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { START_MATCH, END_MATCH } from '../../graphql/matches/mutations';

const Displaymatch = () => {
    const [startMatch, { startMatchData, startMatchLoading, startMatchError }] = useMutation(START_MATCH);
    const [endMatch, { endMatchData, endMatchLoading, endMatchError }] = useMutation(END_MATCH);
    const navigate = useNavigate();
    const { id } = useParams();
    const { loading: matchLoading, error:matchError, data: matchData } = useQuery(GET_MATCH,{
        variables: { getMatchId:id },
      });

    const handleStartClick = async (event) => {
      const headers = {
        'token': localStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      };
      await startMatch({variables: {startMatchId: id},context:{
        headers: headers
    }})
      window.location.reload() // Recarga la página
    }
  
    const handleEndClick = async (event) => {
      const headers = {
        'token': localStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      };
      await endMatch({variables: {endMatchId: id},context:{
        headers: headers
    }})
      window.location.reload() // Recarga la página
    }
    
    const handleBackClick = () => {
        navigate('/home');
    }
    
    if (matchLoading) return <p>Loading...</p>;
    if (matchError) return <p>Error in Teams : {matchError.message}</p>;
    
    console.log(matchData);
    const match = matchData.getMatch;
    console.log(match);

    const StyledButton = styled(Button) (() => ({
      marginTop: '20px'
    }));

    if(startMatchLoading || endMatchLoading)
    return (
      <div>
        <IconButton aria-label="back" onClick={handleBackClick}>
          <ArrowBackIosIcon />
        </IconButton>
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
          <p>Loading...</p>
        </List>
      </div>
    );

    if(startMatchError || endMatchError)
    return (
      <div>
        <IconButton aria-label="back" onClick={handleBackClick}>
          <ArrowBackIosIcon />
        </IconButton>
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
          <p>Error :{startMatchError.message || endMatchError.message}</p>
        </List>
      </div>
    );

    if(match.status == 'confirmed')
    return (
      <div>
        <IconButton aria-label="back" onClick={handleBackClick}>
          <ArrowBackIosIcon />
        </IconButton>
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
          <StyledButton variant="contained" color="primary" startIcon={<PlayArrowIcon />}
            onClick={handleStartClick}>
            Iniciar
          </StyledButton>
        </List>
      </div>
    );

    if(match.status == 'playing')
    return (
      <div>
        <IconButton aria-label="back" onClick={handleBackClick}>
          <ArrowBackIosIcon />
        </IconButton>
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
          <StyledButton variant="contained" color="error" startIcon={<StopIcon />}
            onClick={handleEndClick}>
            Finalizar
          </StyledButton>
        </List>
      </div>
    );
    else
      return (
        <div>
          <IconButton aria-label="back" onClick={handleBackClick}>
            <ArrowBackIosIcon />
          </IconButton>
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