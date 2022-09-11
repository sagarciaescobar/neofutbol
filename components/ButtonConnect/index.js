import React, { useState, useEffect } from 'react';
import { useWallet } from '../../hooks/useWallet';
import { button, connected, connecting } from './index.module.css';
import { Modal } from '../../container/Modal';

export default function Button({ variant, className, size }) {
  const { connect, isActive, isActivating, error, setError } = useWallet();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(false);
    setError(undefined);
  };

  useEffect(() => {
    if (error) setShow(true);
  }, [error]);

  return (
    <>
      <button
        disabled={isActive}
        onClick={connect}
        className={`default-button ${button} ${isActivating ? connecting : null} ${isActive ? connected : null}`}
        variant={variant}
        size={size}
      >
        {isActivating ? 'CONENCTANDO' : !isActive ? 'CONECTA TU WALLET' : 'CONECTADO'}
      </button>
      {error && <Modal onClick={handleClick} message={error?.message} show={show} />}
    </>
  );
}
