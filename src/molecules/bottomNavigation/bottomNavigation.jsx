import * as React from 'react';

const  BottomsNavigation = () =>{
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
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
        <BottomNavigationAction label="Sedes" icon={<EmojiTransportationOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomsNavigation;