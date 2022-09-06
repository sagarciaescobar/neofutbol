import { ethers } from "ethers";
import { hooks, metaMask } from "../connectors/metamask";

export const useWallet = () => {
  const { useIsActive, useProvider, useIsActivating } = hooks;
  const isActive = useIsActive();
  const provider = useProvider();
  const isActivating = useIsActivating();

  const connect = async () => {
    await metaMask.activate(4);
  };

  return {
    isActivating,
    isActive,
    connect,
    provider,
  };
};
