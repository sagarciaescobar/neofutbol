import { ethers } from "ethers";
import { hooks, metaMask } from "../connectors/metamask";
import { chainId } from "../config/contractData.json";

export const useWallet = () => {
  const { useIsActive, useProvider, useIsActivating } = hooks;
  const isActive = useIsActive();
  const provider = useProvider();
  const isActivating = useIsActivating();

  const connect = async () => {
    await metaMask.activate(chainId);
  };

  return {
    isActivating,
    isActive,
    connect,
    provider,
  };
};
