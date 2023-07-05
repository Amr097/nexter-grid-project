import React from "react";
import Card from "./Card/Card";
import "./Homes.scss";

const Homes = () => {
  return (
    <section className="homes">
      <Card
        image="./images/house-1.jpeg"
        caption="Beautiful family house."
        location="USA"
        rooms="5 rooms"
        area="352"
        price="$1,200,000"
        cardId="1"
      />
      <Card
        image="./images/house-2.jpeg"
        caption="Modern glass villa."
        location="Canada"
        rooms="6 rooms"
        area="450"
        price="$2,900,000"
        cardId="2"
      />
      <Card
        image="./images/house-3.jpeg"
        caption="Cozy country house."
        location="UK"
        rooms="4 rooms"
        area="250"
        price="$850,000"
        cardId="3"
      />
      <Card
        image="./images/house-4.jpeg"
        caption="Beautiful family house."
        location="USA"
        rooms="5 rooms"
        area="352"
        price="$1,200,000"
        cardId="4"
      />
      <Card
        image="./images/house-5.jpeg"
        caption="Beautiful family house."
        location="USA"
        rooms="5 rooms"
        area="352"
        price="$1,200,000"
        cardId="5"
      />
      <Card
        image="./images/house-6.jpeg"
        caption="Beautiful family house."
        location="USA"
        rooms="5 rooms"
        area="352"
        price="$1,200,000"
        cardId="6"
      />
    </section>
  );
};

export default Homes;
