import React, { useState, useEffect } from 'react';

import { AppContainer } from './App.styles';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Navbar } from './components/ui/Navbar/Navbar';
import { Loading } from './components/ui/Loading/Loading';
import { getWeb3 } from './ethereum/web3';
import dappgramContractProvider from './contracts/dappgram.provider';
import { getImagesCount } from './actions/drappgram.action';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentAccount, setCurrentAccount] = useState<string>(null);

  const [imagesCount, setImagesCount] = useState<number>(0);

  useEffect(() => {
    initWeb3();
  }, []);

  const initWeb3 = async (): Promise<void> => {
    setLoading(true);
    try {
      window.web3 = await getWeb3();
      await getAccounts();
      await getContracts();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw new Error(`😔 ${e}`);
    }
  }

  const getAccounts = async (): Promise<void> => {
    const account = (await window.web3.eth.getAccounts())[0];
    if (account) return setCurrentAccount(account);
  }

  const getContracts = async (): Promise<void> => {
    return new Promise(async (res, rej) => {
      const dappgram = await dappgramContractProvider(window.web3.currentProvider);
      window.contracts = {
        ...window.contracts,
        dappgram
      };
      res();
    })
  }

  return (
    <AppContainer>
      <Navbar account={currentAccount} />
      {loading ? <Loading /> : <Dashboard currentAccount={currentAccount} />}
    </AppContainer>
  )
}

export default App;