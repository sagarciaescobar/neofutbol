import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { abi, address } from "../config/contractData.json";

export const useNeoFutbol = () => {
  const [instance, setInstance] = useState();
  const [contract, setContract] = useState({});
  const [loading, setLoading] = useState(true);

  const ethersLibrary = useCallback(() => {
    import("ethers").then(async (ethers) => {
      const provi = new ethers.providers.Web3Provider(window.ethereum);
      const chainId = (await provi.detectNetwork()).chainId;
      if (chainId == 4) {
        const cont = new ethers.Contract(address, abi, provi);
        setInstance(cont);
      }
    });
  }, []);

  const getOwners = async () => {
    const totalSupply = await instance.totalSupply();
    const tokens = new Array(totalSupply.toNumber()).fill();
    const promisesOwners = tokens.map(async (_, i) => {
      const token = await instance.ownerOf(i);
      return token;
    });
    const address = await Promise.all(promisesOwners);
    const board = Array.from(new Set(address));
    const data = board.map((curr) => {
      const numtokens = address.filter((t) => t == curr).length;
      const percentage = Math.round(
        (numtokens / totalSupply.toNumber()) * 100,
        3
      );
      return { address: curr, percentage };
    });
    data.sort((a, b) => a.percentage < b.percentage);
    return data;
  };

  const mint = async (provider) => {
    const contractWithSign = instance.connect(provider.getSigner());
    contractWithSign
      .mint()
      .then((e) => e)
      .catch((e) => alert(e.message));
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
    setLoading(false);
  };

  useEffect(() => {
    if (instance) {
      getData();
      setContract((prev) => ({ ...prev, getOwners: getOwners }));
    }
  }, [instance]);

  useEffect(() => {
    try {
      ethersLibrary();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return { contract, loading, mint };
};
