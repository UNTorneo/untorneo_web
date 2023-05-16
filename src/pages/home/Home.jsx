import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CITIES } from "../../graphql/auth/queries/cities";

const Home = () => {
  const { loading, error, data } = useQuery(GET_CITIES);
  console.log('data :>> ', data);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <main>
      
    </main>
  );
};

export default Home;
