import React from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

const icons = {
    sede: GolfCourseIcon,
    Storefront: StorefrontIcon,
    ShoppingCart: ShoppingCartIcon,
};

const SidebarIcon = ({ iconType }) => {
  const Icon = icons[iconType];
  return <Icon sx={{ marginRight: '10px' , color: 'grey'}} />;
};

export default SidebarIcon;