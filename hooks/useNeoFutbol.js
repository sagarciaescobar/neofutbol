import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

import { abi, address } from "../config/contractData.json";

export const useNeoFutbol = () => {
  const [instance, setInstance] = useState();
  const [contract, setContract] = useState({});
  const [loading, setLoading] = useState(true);

  const ethersLibrary = useCallback(() => {
    if (typeof window !== "undefined") {
      import("ethers").then(async (ethers) => {
        const provi = new ethers.providers.Web3Provider(window.ethereum);
        const cont = new ethers.Contract(address, abi, provi);
        setInstance(cont);
      });
    }
  }, []);

  const getGallery = async () => {
    setLoading(true);
    if (contract.totalSupply) {
      
      setLoading(false);
    }
  };

  const getData = async () => {
    const totalSupply = await instance.totalSupply();
    const tokens = new Array(totalSupply.toNumber()).fill();
      const promises = tokens.map(async (_, i) => {
        const token = await instance.tokenURI(i);
        return JSON.parse(atob(token.replace(/^data:\w+\/\w+;base64,/, "")));
      });
      const data = await Promise.all(promises);
      setContract((prev) => ({ ...prev, gallery: data }));
    setLoading(false)
  };

  useEffect(() => {
    if (instance) getData();
  }, [instance]);

  useEffect(() => {
    try {
      ethersLibrary();
    } catch (e) {
      console.log(e);
    }
  }, []);

  contract.getGallery = getGallery;

  return { contract, loading };
};
