import React from "react";
import { Card } from "react-bootstrap";
import { card, card_img } from "./index.module.css";

export default function TokenCard({ token }) {
  console.log(token);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={token.image} />
      <Card.Body>
        <Card.Title>{token.name}</Card.Title>
        <Card.Text>{token.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
