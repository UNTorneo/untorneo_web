import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { ADD_TOURNAMENT } from './../../graphql/tournament/mutations/tournaments/index';
import Grid from '@mui/material/Grid'


const NewTournament = () => {
    const navigate = useNavigate();
    const [addTournament, { addTournamentData, addTournamentLoading, addTournamentError }] = useMutation(ADD_TOURNAMENT);
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: '320px',
    }));

    return(
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Item>
                        
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default NewTournament