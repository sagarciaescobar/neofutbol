import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import data from '../config/contractData.json';
const { abi, address } = data;

export const useNeoFutbol = () => {
  const [instance, setInstance] = useState();
  const [contract, setContract] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const ethersLibrary = () => {
    const provi = new ethers.providers.InfuraProvider('rinkeby', process.env.NEXT_PUBLIC_PROJECT_ID);
    const cont = new ethers.Contract(address, abi, provi);
    setInstance(cont);
  };

  const getOwners = async () => {
    const totalSupply = await instance.totalSupply();
    const tokens = new Array(totalSupply.toNumber()).fill();
    const promisesOwners = tokens.map(async (_, i) => {
      const token = await instance.ownerOf(i);
      return token;
    });
    const address = await Promise.all(promisesOwners);
    const board = Array.from(new Set(address));
    const data = board.map(curr => {
      const numtokens = address.filter(t => t == curr).length;
      const percentage = Math.round((numtokens / totalSupply.toNumber()) * 100, 3);
      return { address: curr, percentage };
    });
    const sorted = data.sort((a, b) => b.percentage - a.percentage);
    return sorted;
  };

  const mint = async provider => {
    setLoading(true);
    const contractWithSign = await instance.connect(provider.getSigner());
    const tx = await contractWithSign.mint().catch(e => setError(e.error));
    if (tx) {
      setError({message: `transaction in progress `})
      tx.wait()
      .then(t => {
        setError({message: `transaction in completed: ${t.blockHash}`})
      })
      .catch(e => {
        setError(e.error);
      });
    } else {
      setError({ message: 'user rejected transaccion' });
    }
    setLoading(false);
  };

  const getData = async () => {
    try {
      const totalSupply = await instance.totalSupply();
      const tokens = new Array(totalSupply.toNumber()).fill();
      const promises = tokens.map(async (_, i) => {
        const token = await instance.tokenURI(i);
        return JSON.parse(atob(token.replace(/^data:\w+\/\w+;base64,/, '')));
      });
      const data = await Promise.all(promises);
      setContract(prev => ({ ...prev, gallery: data }));
      setLoading(false);
    } catch (e) {
      setError(e.error);
    }
  };

  useEffect(() => {
    if (instance) {
      getData();
      setContract(prev => ({ ...prev, getOwners: getOwners }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance]);

  useEffect(() => {
    ethersLibrary();
  }, []);

  return { contract, loading, mint, error, setError };
};
