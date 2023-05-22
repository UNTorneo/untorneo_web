import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useMutation } from "@apollo/client";
import { START_TOURNAMENT } from './../../graphql/tournament/mutations/tournaments';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export default function TournamentGridItem({id, name, sport, mode, clan, venue, access, status}) {
  const [startTournament, { data, loading, error }] = useMutation(START_TOURNAMENT);
  const navigate = useNavigate();

  const handleItemClick = () => { navigate(`/tournament/${id}`); };
  
  const handleStartClick = async (event) => {
    event.preventDefault();
    const response = await startTournament({variables: {startTournamentId: id}})
    console.log("respones: " + response);
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

  if (loading) return (
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
  if (error) return (
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
      <p>Error :{error.message}</p>
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