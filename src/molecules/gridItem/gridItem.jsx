import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useMutation } from "@apollo/client";
import { START_TOURNAMENT, END_TOURNAMENT } from './../../graphql/tournament/mutations/tournaments';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';


export default function TournamentGridItem({id, name, sport, mode, clan, venue, access, status}) {
  const [startTournament, { startTournamentData, startTournamentLoading, startTournamentError }] = useMutation(START_TOURNAMENT);
  const [endTournament, { endTournamentData, endTournamentLoading, endTournamentError }] = useMutation(END_TOURNAMENT);
  const navigate = useNavigate();

  const handleItemClick = () => { navigate(`/tournament/${id}`); };
  
  const handleStartClick = async (event) => {
    await startTournament({variables: {startTournamentId: id}})
    window.location.reload() // Recarga la página
  }

  const handleEndClick = async (event) => {
    await endTournament({variables: {endTournamentId: id}})
    window.location.reload() // Recarga la página
  }
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    minHeight: '320px',
    paddingTop: '60px'
  }));

  const StyledButton = styled(Button) (() => ({
    marginTop: '20px'
  }));

  if (startTournamentLoading || endTournamentLoading) return (
    <Item>
      <span onClick={handleItemClick}>
        <EmojiEventsIcon></EmojiEventsIcon>
        <h2>{name}</h2>
        <p>Deporte: {sport}, {mode}</p>
        <p>Lugar: {venue}</p>
        <p>Clan: {clan}</p>
        <p>Tipo de acceso: {access}</p>
        <span style={{ padding: '10px' }}>Estado: {status}</span>
        <br />
      </span>
      <p>Loading...</p>
    </Item>);
  if (startTournamentError || endTournamentError) return (
    <Item>
      <span onClick={handleItemClick}>
        <EmojiEventsIcon></EmojiEventsIcon>
        <h2>{name}</h2>
        <p>Deporte: {sport}, {mode}</p>
        <p>Lugar: {venue}</p>
        <p>Clan: {clan}</p>
        <p>Tipo de acceso: {access}</p>
        <span style={{ padding: '10px' }}>Estado: {status}</span>
        <br />
      </span>
      <p>Error :{startTournamentError.message || endTournamentError.message}</p>
    </Item>
  );

  if (status == 'confirmed')
    return (
      <Item>
        <span onClick={handleItemClick}>
          <EmojiEventsIcon></EmojiEventsIcon>
          <h2>{name}</h2>
          <p>Deporte: {sport}, {mode}</p>
          <p>Lugar: {venue}</p>
          <p>Clan: {clan}</p>
          <p>Tipo de acceso: {access}</p>
          <span style={{ padding: '10px' }}>Estado: {status}</span>
          <br />
        </span>
        <StyledButton variant="contained" color="primary" startIcon={<PlayArrowIcon/>}
          onClick={handleStartClick}>
          Iniciar
        </StyledButton>
      </Item>
    );
    else if (status == 'in-progress')
    return (
      <Item>
        <span onClick={handleItemClick}>
          <EmojiEventsIcon></EmojiEventsIcon>
          <h2>{name}</h2>
          <p>Deporte: {sport}, {mode}</p>
          <p>Lugar: {venue}</p>
          <p>Clan: {clan}</p>
          <p>Tipo de acceso: {access}</p>
          <span style={{ padding: '10px' }}>Estado: {status}</span>
          <br />
        </span>
        <StyledButton variant="contained" color="error" startIcon={<StopIcon/>}
          onClick={handleEndClick}>
          Finalizar
        </StyledButton>
      </Item>
    );
  else
    return (
      <Item onClick={handleItemClick}
        style={{ cursor: 'pointer' }}>
        <EmojiEventsIcon></EmojiEventsIcon>
        <h2>{name}</h2>
        <p>Deporte: {sport}, {mode}</p>
        <p>Lugar: {venue}</p>
        <p>Clan: {clan}</p>
        <p>Tipo de acceso: {access}</p>
        <p>Estado: {status}</p>
      </Item>
    );
}