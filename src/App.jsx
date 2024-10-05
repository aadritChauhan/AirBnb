import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";
import "./App.css";
import data from "./data/data.js";

function App() {
  const cardData = data.map((singleCard) => {
    return <Card key={singleCard.id} singleCard={singleCard} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      {cardData}
    </div>
  );
}

export default App;
