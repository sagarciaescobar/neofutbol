/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { card, card_img } from './index.module.css';

export default function TokenCard({ token, handleshown, handleHide }) {
    const mockPlayer = {
    name: 'ACUÑA',
    image: 'https://playersnft-b264c.web.app/players/argentina/default/001.jpg',
    attributes: [
        {
        'trail-type': 'PAC',
        value: '76',
        },
        {
        'trail-type': 'SHO',
        value: '74',
        },
        {
        'trail-type': 'PAS',
        value: '82',
        },
        {
        'trail-type': 'DRI',
        value: '87',
        },
        {
        'trail-type': 'DEF',
        value: '79',
        },
        {
        'trail-type': 'PHY',
        value: '82',
        },
    ],
    };

  const handleClick = () => {
      window.location.href="users/token" + token
  }

  return (
    <div
      className={card}
      onClick={()=>{window.location.assign(window.location.origin + '/user/tokens/'+token.id)}}
      onMouseEnter={() => handleshown(token)}
      onMouseLeave={() => handleHide()}
      id="cardToken"
    >
      {!token.type && <img className={card_img} src={token.image} alt={token.name} />}
      {token.type && <img className={card_img} src={token.url} alt="coming soon" />}
    </div>
  );
}
