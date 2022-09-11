import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';

const error = err => {
  console.log(err);
  metaMask.deactivate()
};

const [metaMask, hooks] = initializeConnector(actions => new MetaMask({ actions, onError: error }));

export { metaMask, hooks };
