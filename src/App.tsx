import React from 'react';
import { AppContainer } from './App.styles';
import { Navbar } from './components/ui/Navbar/Navbar';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  )
}

export default App;