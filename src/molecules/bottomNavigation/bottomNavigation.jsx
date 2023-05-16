import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SportsMmaIcon from '@mui/icons-material/SportsMma';

export default function BottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Torneos" icon={<EmojiEventsIcon />} />
        <BottomNavigationAction label="Equipos" icon={<PeopleAltIcon />} />
        <BottomNavigationAction label="Partidos" icon={<SportsMmaIcon />} />
      </BottomNavigation>
    </Box>
  );
}