import React, { useState, useEffect } from 'react';
import { useWallet } from '../../hooks/useWallet';
import { button, connected, connecting, deactived } from './index.module.css';
import { Modal } from '../../container/Modal';
import { useNeoFutbol } from '../../hooks/useNeoFutbol';

export default function Button({ variant, className, size }) {
  const { isActive, provider } = useWallet();
  const { error, setError , mint } = useNeoFutbol();
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
        disabled={!isActive}
        onClick={() => {
          mint(provider);
        }}
        className={`default-button ${button} ${isActive ? null : deactived}`}
        variant={variant}
        size={size}
      >
        MINT
      </button>
      {error && <Modal onClick={handleClick} message={error?.message} show={show} />}
    </>
  );
}
