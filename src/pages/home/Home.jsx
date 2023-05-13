import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CITIES } from "../../graphql/queries/cities";

const Home = () => {
  const { loading, error, data } = useQuery(GET_CITIES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <main>
      <h1>Home aplicacion ejemplo query Cities</h1>

      {data?.cities.map(({ id, name }) => (
        <ol key={id}>
          <li>{name}</li>
        </ol>
      ))}
    </main>
  );
};

export default Home;
