import { useState } from 'react';
import './App.css';
import {
  MenuContainer,
  MainContainer,
  LogoContainer,
  MenuItensContainer,
  Logo,
} from './app.styled';

import Home from './pages/home';

const App = () => {
  return (
    <MainContainer>
      <MenuContainer>
        <LogoContainer>
          <Logo src="https://i.imgur.com/cto0jWS.png" alt="Logo" />
        </LogoContainer>
        <MenuItensContainer></MenuItensContainer>
      </MenuContainer>
      <Home></Home>
    </MainContainer>
  );
};

export default App;
