import React from "react";
import "../App.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.singleCard.coverImg}
        className="card--image"
        alt="Descriptive text for the image"
      />
      <div className="card--stats">
        <img src="/Star.png" className="card--star" alt="" />
        <span>{props.singleCard.stats.rating}</span>
        <span>({props.singleCard.stats.reviewCount}) . </span>
        <span>{props.singleCard.country}</span>
      </div>
      <p>{props.singleCard.title}</p>
      <p>
        <span className="bold">From {props.singleCard.price} </span>/ person
      </p>
    </div>
  );
}
