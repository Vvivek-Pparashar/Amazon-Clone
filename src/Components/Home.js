import React from "react";
import './Home.css'

function Home() {
  return (
    <div className="home">
      <img className="home__image" alt="prime_image" src={require("../Resources/prime_2.jpg")} />
    </div>
  );
}

export default Home;
