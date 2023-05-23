import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, CardActions, Button } from '@mui/material';
import React from "react";

const CardVenue = ({ id, titulo, descripcion, cover }) => {
  
  return (
    <Card sx={{
      width: 300,
      minHeight: 200,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        '& $overlay': {
          opacity: 0.5,
        },
      },
    }}>
      <CardContent >
        <Typography variant="h6" component="h3" gutterBottom>
          {descripcion}
        </Typography>
        <Typography variant="body2" component="p">
          Ubicacion: {titulo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Añadir
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardVenue;