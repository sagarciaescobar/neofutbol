import { ethers } from 'ethers';
import { hooks, metaMask } from '../connectors/metamask';
import data from '../config/contractData.json';
import { useEffect, useState } from 'react';

const { chainId } = data;

export const useWallet = () => {
  const { useIsActive, useProvider, useIsActivating } = hooks;
  const [error, setError] = useState(undefined);
  const isActive = useIsActive();
  const provider = useProvider();
  const isActivating = useIsActivating();

  const connect = () => {
    metaMask.activate(chainId).catch(e => {
      setError(e);
    });
  };

  const disconnect = () => {
    metaMask.resetState();
  };

  return {
    isActivating,
    isActive,
    connect,
    provider,
    disconnect,
    error,
    setError,
  };
};
