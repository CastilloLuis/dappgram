import DappgramContract from '../../build/contracts/Dappgram.json';
import contract from 'truffle-contract';

export default async function(provider: any): Promise<any> {
  const _contract = contract(DappgramContract);
  _contract.setProvider(provider);
  const instance = await _contract.deployed();
  return instance;
};
