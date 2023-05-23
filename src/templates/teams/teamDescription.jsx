import { useQuery, useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { GET_TEAM_BY_ID } from '../../graphql/teams/queries';
import { DataGrid } from '@mui/x-data-grid';
import { JOIN_TO_TEAM } from "../../graphql/teams/mutations";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React,{ useState } from "react";


const TeamDescription = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [responseError, setResponseError] = useState(null);
    const { loading, error, data } = useQuery(GET_TEAM_BY_ID, {
        variables: { getTeamId:id },
      });
    const [joinTeam, { data:joinData, loading:joinLoading, error: joinError }] = useMutation(JOIN_TO_TEAM);
    if (loading || joinLoading) return <p>Loading...</p>;
    if (error || joinError) return <p>Error : {error}</p>;

    const filteredData = data.getTeam.members.filter(row => row !== null);

    const columns = [
        { field: 'id', headerName: 'Id del usuario', width: 150 },
        { field: 'username', headerName: 'Nombre de usuario', width: 200 },
        { field: 'birthday', headerName: 'Nacimiento', width: 250 },
        { field: 'email', headerName: 'Correo', width: 300}
      ];
    const handleClick = async() => {
        const response = await joinTeam({ variables: { 
            teamId:id,
            userId:localStorage.getItem('userId')
        } });
        console.log('response',response);
        if(response.data.registerMember.error) setResponseError(response.data.registerMember.error);
        else setResponseError(response.data.registerMember.message);
        window.location.reload() // Recarga la página
    };
   
    console.log(data);
    
    return(
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
                <h1 style={{ textAlign: 'center' }}>Nombre del equipo: {data.getTeam.name}</h1>
                <h1 style={{ textAlign: 'center' }}>Fundado en: {data.getTeam.createdAt}</h1>
                <h1 style={{ textAlign: 'center' }}>Id del clan: {data.getTeam.clanId? data.getTeam.clanId:'Sin clan'}</h1>
                <div>
                    <h1>Ids de torneos en los que participaron</h1>
                    <ul>
                        {data.getTeam.tournaments.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ flex: 1, backgroundColor: '#e0e0e0' }}>
                <h1 style={{ textAlign: 'center' }}>Miembros del equipo: {data.getTeam.name}</h1>
                <div style={{ height: 400, width: '100%' }}>
          
                    <DataGrid
                        rows={filteredData}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                    />
                
                </div>
                {!filteredData.some((user) => user.id == localStorage.getItem('userId')) && 
                    <Button variant="contained" style={{ display: 'flex', justifyContent: 'center'}} onClick={handleClick} >
                    Unirme al equipo
                    </Button>   
                }
                {responseError && <h1> {responseError}</h1>}
            </div>
            
        </div>
    
    ) ;
};
  
export default TeamDescription;