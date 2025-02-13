import { useState, useEffect } from 'react';
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
import Login from './pages/login';

import { Routes, Route } from 'react-router';

const App = () => {
  const [url, setUrl] = useState();

  return (
    <MainContainer>
      {url !== '/login' ? (
        <MenuContainer>
          <LogoContainer>
            <Logo
              src="https://i.imgur.com/A7LXxtu.png"
              alt="Logo"
              style={{ filter: 'brightness(100%)' }}
            />
          </LogoContainer>
          <MenuItensContainer></MenuItensContainer>
        </MenuContainer>
      ) : null}
      <Routes>
        <Route path="/" element={<Home setUrl={setUrl} />} />
        <Route path="/home" element={<Home setUrl={setUrl} />} />
        <Route path="/default" element={<Default setUrl={setUrl} />} />
        <Route path="/tasks" element={<Tasks setUrl={setUrl} />} />
        <Route path="/login" element={<Login setUrl={setUrl} />} />
      </Routes>
    </MainContainer>
  );
};

export default App;
