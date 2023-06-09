import React, { useState } from 'react';
import { GET_TOURNAMENTS } from './../../graphql/tournament/queries/tournaments/index';
import { ADD_TOURNAMENT } from './../../graphql/tournament/mutations/tournaments/index';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TournamentGridItem from '../../molecules/gridItem/gridItem'; './../../molecules/gridItem/gridItem';
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
// import Lottie from "lottie-react";
// import Loading from './../../assets/loading.json';


const Tournament = () =>{
    const navigate = useNavigate();
    const { loading: tournamentsLoading, error: tournamentsError, data: tournamentsData } = useQuery(GET_TOURNAMENTS);
    if (tournamentsLoading) return <p>Loading...</p>;
    if (tournamentsError) return <p>Error in Tournaments : {tournamentsError.message}</p>; 
    const venue = Array(tournamentsData.getTournaments.length);
    for (let i = 0; i < tournamentsData.getTournaments.length; i++) {
        if(tournamentsData.getTournaments[i].venueId == null){
            if(tournamentsData.getTournaments[i].venueName == null){
                venue[i] = null;
            }
            else{
                venue[i] = tournamentsData.getTournaments[i].venueName;
            }
        }
        else{
            venue[i] = tournamentsData.getTournaments[i].venueId.location;
        }
    }

    const handleCreateClick = () => {
        navigate('/add-tournament');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1>Torneos</h1>
            {/* <Button variant="contained" color="success" startIcon={<AddIcon/>}
            style={{marginBottom: '20px'}}
            onClick={handleCreateClick}>
              Crear torneo
            </Button> */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(tournamentsData.getTournaments.length)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <TournamentGridItem
                        id = {tournamentsData.getTournaments[index].id || ""}
                        name = {tournamentsData.getTournaments[index].name || "No hay información"}
                        sport = {tournamentsData.getTournaments[index].sportId.name || "No hay información"}
                        mode = {tournamentsData.getTournaments[index].modeId.name || "No hay información"}
                        clan = {tournamentsData.getTournaments[index].clanId.clan || "No hay un clan específico"}
                        venue = {venue[index] || "No hay información"}
                        access = {tournamentsData.getTournaments[index].access || "No hay información"}
                        status = {tournamentsData.getTournaments[index].status || "No hay información"}
                        ></TournamentGridItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Tournament;