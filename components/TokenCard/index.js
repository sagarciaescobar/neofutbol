/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { card, card_img } from './index.module.css';

export default function TokenCard({ token, handleshown, handleHide }) {

  const handleClick = () => {
      window.location.href = "/user/tokens/" + token.id
  }

  return (
    <div
      className={card}
      onMouseEnter={() => handleshown(token)}
      // onMouseLeave={() => handleHide()}
      onClick={handleClick}
      id="cardToken"
    >
      {!token.type && <img className={card_img} src={token.image} alt={token.name} />}
      {token.type && <img className={card_img} src={token.url} alt="coming soon" />}
    </div>
  );
}
