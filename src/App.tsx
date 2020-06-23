import React from 'react';
import { Container } from '@material-ui/core';
import Logo from './components/Header/Logo/Logo';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
      <div className="App">
        <Container maxWidth='xl'>
          <Header>
            <Logo />
          </Header>
          <MainContent />
        </Container>
      </div>
  );
}

export default App;
