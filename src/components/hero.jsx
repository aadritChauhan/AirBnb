import React from "react";
import "../App.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src="/heroGrid.png" className="hero--photo" />
      <h1 className="hero--heading">Online Experience</h1>
      <p className="hero--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, odit
        illo blanditiis aspernatur culpa autem vel dolores, ut expedita ad sit
        quis aperiam cum ea reprehenderit itaque quia.
      </p>
    </section>
  );
}
