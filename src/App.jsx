import { useState, useEffect } from 'react';
import './App.css';
import {
  MenuContainer,
  MainContainer,
  LogoContainer,
  MenuItensContainer,
  Logo,
  MenuIten,
  LogoutContainer,
} from './app.styled';

import Home from './pages/home';
import Tickets from './pages/tickets';
import Default from './pages/default';
import Tasks from './pages/tasks';
import Login from './pages/login';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { Routes, Route, useNavigate } from 'react-router';

const App = () => {
  const [url, setUrl] = useState();

  const navigate = useNavigate();

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
          <MenuItensContainer>
            <MenuIten>
              <HomeOutlinedIcon
                onClick={() => navigate('/home')}
                style={{ fontSize: '32px', color: '#fff' }}
              />
            </MenuIten>
            <MenuIten>
              <ConfirmationNumberOutlinedIcon
                onClick={() => navigate('/tickets')}
                style={{ fontSize: '32px', color: '#fff' }}
              />
            </MenuIten>
            <MenuIten>
              <TaskOutlinedIcon
                onClick={() => navigate('/tasks')}
                style={{ fontSize: '32px', color: '#fff' }}
              />
            </MenuIten>
          </MenuItensContainer>
          <LogoutContainer>
            <ExitToAppOutlinedIcon
              onClick={() => navigate('/login')}
              style={{ fontSize: '32px', color: '#fff' }}
            />
          </LogoutContainer>
        </MenuContainer>
      ) : null}
      <Routes>
        <Route path="/" element={<Home setUrl={setUrl} />} />
        <Route path="/home" element={<Home setUrl={setUrl} />} />
        <Route path="/tickets" element={<Tickets setUrl={setUrl} />} />
        <Route path="/default" element={<Default setUrl={setUrl} />} />
        <Route path="/tasks" element={<Tasks setUrl={setUrl} />} />
        <Route path="/login" element={<Login setUrl={setUrl} />} />
      </Routes>
    </MainContainer>
  );
};

export default App;
