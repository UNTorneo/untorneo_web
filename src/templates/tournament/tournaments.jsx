import React, { useState } from 'react';
import { GET_TOURNAMENTS } from './../../graphql/tournament/queries/tournaments/index';
import { useQuery } from '@apollo/client';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TournamentGridItem from '../../molecules/gridItem/gridItem'; './../../molecules/gridItem/gridItem';
// import Lottie from "lottie-react";
// import Loading from './../../assets/loading.json';


const Tournament = () =>{
    const { loading: tournamentsLoading, error: tournamentsError, data: tournamentsData } = useQuery(GET_TOURNAMENTS);
    if (tournamentsLoading) return <p>Loading...</p>;
    if (tournamentsError) return <p>Error : {tournamentsError.message}</p>;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(tournamentsData.getTournaments.length)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <TournamentGridItem
                        name = {tournamentsData.getTournaments[index].name || "No hay información"}
                        sport = {tournamentsData.getTournaments[index].sportId.name || "No hay información"}
                        mode = {tournamentsData.getTournaments[index].modeId.name || "No hay información"}
                        
                        
                        ></TournamentGridItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Tournament;