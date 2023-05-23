import React from 'react';
import Box from '@mui/material/Box';
import SidebarItem from '../../molecules/sidebarItem/SidebarItem';
import logo from '../../../public/untorneo.png'
import { Avatar } from '@mui/material';

const Sidebar = ({ sideItems }) => {
  return (
    <Box 
      sx={{ 
        width: '20%',
        height: '100vh',
        bgcolor: 'grey.50',
        padding: '10px',
      }}
    >
      <Box sx={{  py: 3 }}>
        <Avatar src={logo}/> 
      </Box>
      <SidebarItem text="Sedes" iconType="sede" path="/sedes"/>
      <SidebarItem text="Products" iconType="Storefront" path="/torneos"/>
      <SidebarItem text="Orders" iconType="ShoppingCart" path="/Duenos"/>
  </Box>
    );
};

export default Sidebar;