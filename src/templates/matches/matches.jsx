import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_MATCHES } from '../../graphql/matches/queries';

const Matches = () => {
    const navigate = useNavigate();
    const { loading: matchesLoading, error:matchesError, data: matchesData } = useQuery(GET_MATCHES);
    if (matchesLoading) return <p>Loading...</p>;
    if (matchesError) return <p>Error in Teams : {matchesError.message}</p>;
    console.log(matchesData.getMatches);
   
    //matchesData.getMatches.tournamentName = matchesData.getMatches.tournamentId.name;
    const columns = [
        { field: 'id', headerName: 'Id del partido', width: 300 },
        { field: 'tournamentId', headerName: 'Nombre del torneo', width: 400,  valueGetter: (params) => { return params.row.tournamentId.name}},
        { field: 'homeTeam', headerName: 'Equipo local', width: 400, valueGetter: (params) => { return params.row.homeTeam.name}},
        { field: 'visitingTeam', headerName: 'Equipo visitante', width: 400, valueGetter: (params) => { return params.row.visitingTeam.name}},
        { field: 'date', headerName: 'Fecha', width: 400}
      ];

    const handleCellClick = (params) => {
      const selectedElementId = params.id; // Adjust this based on your data structure
      console.log(selectedElementId);
      navigate(`/match/${selectedElementId}`)
      
    }
    
  
    return (

        
        <div style={{ height: 400, width: '100%' }}>
          <h1>Próximos partidos</h1>
          <DataGrid
            rows={matchesData.getMatches}
            columns={columns}
            pageSizeOptions={[5, 10]}
            onCellClick={(params) => handleCellClick(params)}
          />
          
        </div>
      );
};

export default Matches;


  