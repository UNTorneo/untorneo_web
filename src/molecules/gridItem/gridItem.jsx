import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from "react-router-dom";

export default function TournamentGridItem({id, name, sport, mode, clan, location, venueName, access, status}) {
  const navigate = useNavigate();
  const handleClick = () => { navigate(`/tournament/${id}`); };
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Item onClick={handleClick}>
      <EmojiEventsIcon></EmojiEventsIcon>
      <h2>{name}</h2>
      <p>Deporte: {sport}, {mode}</p>

    </Item>
  );
}