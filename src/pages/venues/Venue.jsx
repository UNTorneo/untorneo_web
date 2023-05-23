import React from 'react'
import Layout from '../../templates/layout/Layout'
import { useQuery } from "@apollo/client";
import { GET_VENUES } from '../../graphql/queries/venues';
import Card from '../../molecules/card/Card';
import { Box } from '@mui/material';
import Court from './TableVenue';

const Venue = () => {

  const { loading, error, data } = useQuery(GET_VENUES);

  

  if (error) return <p>Error : {error.message}</p>;

  return (
    <Layout>
    <main>
      <h1>Sedes</h1>
      <Box sx={{
        display: 'flex',
        gap: '20px',
        marginBottom: '30px'
      }}>
      {loading ?
      <p>Loading...</p> 
      :
      data?.getVenues?.map(({ id, location, description, isActive }) => (
        <Card id={id} titulo={location} descripcion={description} cover={`/assets/covers/cover_${id}.jpg`}/>
      ))}

      </Box>
      <Court/>

    </main>

    </Layout>
  )
}

export default Venue