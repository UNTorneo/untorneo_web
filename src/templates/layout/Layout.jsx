import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../../organisms/sidebar/Sidebar'

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',}}>
    <Sidebar/>
    <Box sx={{
      padding: '30px',
      width: '100%'
    }}>
      {children}
    </Box>
  </Box>
  )
}

export default Layout