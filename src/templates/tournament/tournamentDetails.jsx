import { useQuery, useMutation } from "@apollo/client";
import { useParams, useNavigate } from 'react-router-dom';
import { GET_TOURNAMENT } from './../../graphql/tournament/queries/tournaments/index';
import { DELETE_TOURNAMENT } from './../../graphql/tournament/mutations/tournaments/index';

import { Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { experimentalStyled as styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';

const TournamentDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('id :>> ', id);
    const { loading, error, data } = useQuery(GET_TOURNAMENT, {
        variables: { getTournamentId: id },
    });
    const [deleteTournament, { deleteTournamentData, deleteTournamentLoading, deleteTournamentError }] = useMutation(DELETE_TOURNAMENT);

    const handleBackClick = () => {
        navigate('/home');
    }

    if (loading) 
    return (
        <div>
            {/* <IconButton aria-label="back" onClick={handleBackClick}>
                <ArrowBackIosIcon />
            </IconButton> */}
            <p>Loading...</p>
        </div>
    );
    if (error) 
    return (
        <div>
            <IconButton aria-label="back" onClick={handleBackClick}>
                <ArrowBackIosIcon />
            </IconButton>
            <p>Error : {error.message}</p>
        </div>
    );

    if(deleteTournamentLoading)
    return (
        <div>
            <IconButton aria-label="back" onClick={handleBackClick}>
                <ArrowBackIosIcon />
            </IconButton>
            <h1>{data.getTournament.name}</h1>
            <p>Eliminando...</p>
        </div>
    );
    
    if(deleteTournamentError)
    return (
        <div>
            <IconButton aria-label="back" onClick={handleBackClick}>
                <ArrowBackIosIcon />
            </IconButton>
            <h1>{data.getTournament.name}</h1>
            <p>Error al eliminar el torneo : {deleteTournamentError.message}</p>
        </div>
    );

    const handleDeleteClick = async () => {
        await deleteTournament(id);
        navigate('/home');
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: '320px',
    }));

    if(data.getTournament.venueId != null)
    return(
        <div>
            <IconButton aria-label="back" onClick={handleBackClick}>
                <ArrowBackIosIcon />
            </IconButton>
            <h1>{data.getTournament.name}</h1>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}
                style={{ marginBottom: '20px' }}
                onClick={handleDeleteClick}>
                Eliminar torneo
            </Button>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                    <Item>
                        <h2>Equipos</h2>
                        <ul>
                            {Array.from(Array(data.getTournament.teams.length)).map((_, index) => (
                                <li style={{ textAlign: 'left' }}>
                                    {data.getTournament.teams[index].name} (
                                    {data.getTournament.teams[index].members.length} miembros)
                                </li>
                            ))}
                        </ul>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h2>Deporte</h2>
                        <h3>Nombre: <span style={{fontWeight: '400'}}>{data.getTournament.sportId.name}</span></h3>
                        <h3>Descripción: <span style={{fontWeight: '400'}}>{data.getTournament.sportId.description}</span></h3>
                        <h3>Recomendaciones: <span style={{fontWeight: '400'}}>{data.getTournament.sportId.recommendation}</span></h3>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h2>Modo de juego</h2>
                        <h3>Descripción: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.description}</span></h3>
                        <h3>Puntos para ganar: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.winningPoints}</span></h3>
                        <h3>Número máximo de equipos: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.teamsNumber}</span></h3>
                        <h3>Jugadores por equipo: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.playersPerTeam}</span></h3>
                        <h3>Número máximo de cambios: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.substitutePlayers}</span></h3>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h2>Lugar</h2>
                        <h3>Ubicación: <span style={{ fontWeight: '400' }}>{data.getTournament.venueId.location}</span></h3>
                        <h3>Descripción: <span style={{ fontWeight: '400' }}>{data.getTournament.venueId.description}</span></h3>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
    else
    return(
        <div>
            <IconButton aria-label="back" onClick={handleBackClick}>
                <ArrowBackIosIcon />
            </IconButton>
            <h1>{data.getTournament.name}</h1>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}
                style={{ marginBottom: '20px' }}
                onClick={handleDeleteClick}>
                Eliminar torneo
            </Button>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                    <Item>
                        <h2>Equipos</h2>
                        <ul>
                            {Array.from(Array(data.getTournament.teams.length)).map((_, index) => (
                                <li style={{ textAlign: 'left' }}>
                                    {data.getTournament.teams[index].name} (
                                    {data.getTournament.teams[index].members.length} miembros)
                                </li>
                            ))}
                        </ul>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h2>Deporte</h2>
                        <h3>Nombre: <span style={{fontWeight: '400'}}>{data.getTournament.sportId.name}</span></h3>
                        <h3>Descripción: <span style={{fontWeight: '400'}}>{data.getTournament.sportId.description}</span></h3>
                        <h3>Recomendaciones: <span style={{fontWeight: '400'}}>{data.getTournament.sportId.recommendation}</span></h3>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h2>Modo de juego</h2>
                        <h3>Descripción: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.description}</span></h3>
                        <h3>Puntos para ganar: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.winningPoints}</span></h3>
                        <h3>Número máximo de equipos: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.teamsNumber}</span></h3>
                        <h3>Jugadores por equipo: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.playersPerTeam}</span></h3>
                        <h3>Número máximo de cambios: <span style={{ fontWeight: '400' }}>{data.getTournament.modeId.substitutePlayers}</span></h3>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h2>Lugar</h2>
                        <h3>Ubicación: <span style={{ fontWeight: '400' }}>{data.getTournament.venueName}</span></h3>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}
export default TournamentDetails