import React from 'react';
import { Card } from 'react-bootstrap';
import { card, card_img, card_img_aux, card_body, card_title, card_text } from './index.module.css';

export default function TokenCard({ token }) {
  return (
    <Card style={{ width: '18rem' }} className={card}>
      <Card.Img variant="top" src={token.image} className={card_img} />
      <Card.Img variant="top" src={token.image} className={card_img_aux} />
      <Card.Body className={card_body}>
        <Card.Title className={card_title}>{token.name}</Card.Title>
        <Card.Text className={card_text}>{token.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
