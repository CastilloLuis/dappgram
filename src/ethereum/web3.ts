import Web3 from 'web3';

export function getWeb3(): Promise<any> {
  return new Promise((res, rej) => {
    window.addEventListener('load', async () => {
      let web3 = window.web3;
      if (!web3) rej('Web3 / MetaMask is not defined');
      web3 = new Web3(web3.currentProvider);
      enableWallet();
      res(web3);
    })
  })
}

function enableWallet(): void {
  if (!window.ethereum.isConnected()) {
    window.ethereum.enable();
  }
}
