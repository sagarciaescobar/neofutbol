/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card } from 'react-bootstrap';
import { card, card_img } from './index.module.css';

export default function TokenCard({ token }) {
  return (
    <div className={card}>
      {!token.type && <img className={card_img} src={token.image} alt={token.name} />}
      {token.type && <p>Coming soon</p>}
    </div>
  );
}
