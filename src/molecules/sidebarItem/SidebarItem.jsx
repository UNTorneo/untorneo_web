import React from 'react';
import Box from '@mui/material/Box';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import SidebarIcon from '../../atoms/sidebarIcon/SidebarIcon';
import SidebarText from '../../atoms/sidebarText/SidebarText';



const SidebarItem = ({ text, iconType, path}) => {

    const { pathname } = useLocation()
 
    return (
        <NavLink
        to={path} 
        style={{ textDecoration: 'none', color: 'inherit' }}
    >

      <Box 
          sx={{ 
              display: 'flex',
              alignItems: 'center',
              padding: '15px 10px',
              bgcolor: pathname === path ? 'grey.300' : 'transparent',
              '&:hover': {
                  bgcolor: pathname !== path && 'grey.200',
                },
                borderRadius: '10px',
                marginBottom: '10px',
                color: pathname === path ? '#grey.400' : 'grey',
                
            }}
            >
          <SidebarIcon iconType={iconType} />
          <SidebarText text={text} />
      </Box>
          </NavLink>
    );
};

export default SidebarItem;