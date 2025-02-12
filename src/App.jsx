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
import Default from './pages/default';
import Tasks from './pages/tasks';

import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <MainContainer>
      <MenuContainer>
        <LogoContainer>
          <Logo src="https://i.imgur.com/cto0jWS.png" alt="Logo" />
        </LogoContainer>
        <MenuItensContainer></MenuItensContainer>
      </MenuContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/default" element={<Default />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </MainContainer>
  );
};

export default App;
