import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery, useMutation } from "@apollo/client";
import {GET_TEAMS, GET_TEAM_BY_ID} from '../../graphql/teams/queries/index';



const Teams = () => {
    const [selectedRows, setSelectedRows] = React.useState([]);
    const { loading: teamsLoading, error:teamsError, data: teamsData } = useQuery(GET_TEAMS);
    //const [getTeamById,{ loading: teamLoading, error:teamError, data: teamData }] = useQuery(GET_TEAM_BY_ID);
    if (teamsLoading) return <p>Loading...</p>;
    if (teamsError) return <p>Error : {teamsError.message}</p>;
    console.log(teamsData);
    
    const columns = [
        { field: 'id', headerName: 'Id del equipo', width: 300 },
        { field: 'name', headerName: 'Nombre del equipo', width: 730 },
        { field: 'clanId', headerName: 'Id del clan', width: 400}
      ];


    
  
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={teamsData.getTeams}
            columns={columns}
            pageSizeOptions={[5, 10]}

          />
        </div>
      );
};
  
export default Teams;


  