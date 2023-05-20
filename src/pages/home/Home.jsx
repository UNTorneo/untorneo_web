import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import Teams from '../../templates/teams/teams';
import Tournament from './../../templates/tournament/tournaments';
const Home = () => {

    const [value, setValue] = React.useState(0);
    
    const handleTabChange = (newValue) => {
      setValue(newValue);
    };
    let content;
    switch (value) {
        case 0:
          content = 
            <Tournament/>;
          break;
        case 1:
          content = <Teams/>;
          break;
        case 2:
          content = <h1>PartidosContent </h1>;
          break;
        case 3:
          content = <h1>SedesContent </h1>;
          break;
        default:
          content = null;
      }
    
  
    
  return (
    <main>
       <div>
       {content}
       </div>
        
      <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleTabChange(newValue);
        }}
      >
        <BottomNavigationAction label="Torneos" icon={<EmojiEventsIcon />} />
        <BottomNavigationAction label="Equipos" icon={<PeopleAltIcon />} />
        <BottomNavigationAction label="Partidos" icon={<SportsMmaIcon />} />
        <BottomNavigationAction label="Sedes" icon={<EmojiTransportationOutlinedIcon />} />
      </BottomNavigation>
    </Box>
      
    </main>
  );
};

export default Home;
