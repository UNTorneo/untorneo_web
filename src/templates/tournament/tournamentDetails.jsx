import { useQuery, useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { GET_TOURNAMENT } from './../../graphql/tournament/queries/tournaments/index';
import { Grid, Container, Typography } from '@mui/material';

const TournamentDetails = () => {
    const { id } = useParams();
    console.log('id :>> ', id);
    const { loading, error, data } = useQuery(GET_TOURNAMENT, {
        variables: { getTournamentId: id },
    });
    if (loading || joinLoading) return <p>Loading...</p>;
    if (error || joinError) return <p>Error : {error.message}</p>;

    return(
        <Grid container spacing={{xs:2, md:3}}>
          
        </Grid>
    );
}
export default TournamentDetails