import React from "react";
import { useQuery } from "@apollo/client";



const Home = () => {
  
  console.log('data :>> ', data);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <main>
      {BottomNavigation}
    </main>
  );
};

export default Home;
