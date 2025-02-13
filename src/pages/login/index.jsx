import { useState } from 'react';

import {
  MainContainer,
  LeftSide,
  RightSide,
  MidleSide,
  ArtLogin,
  Content,
  LogoContainer,
  Logo,
  FieldsConatiener,
  TextLogin,
  ButtonLogin,
  ButtonForguet,
  Section,
} from './login.styled';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router';

const Login = (props) => {
  const navigate = useNavigate();

  props.setUrl(window.location.pathname);
  return (
    <MainContainer>
      <LeftSide></LeftSide>
      <MidleSide>
        <ArtLogin
          src="https://wac-cdn.atlassian.com/dam/jcr:76e94ebd-d71e-4991-9008-7b2e838090c8/illustrations-spot-Integrations.svg?cdnVersion=2558"
          alt="art"
        />
      </MidleSide>
      <RightSide>
        <Content>
          <LogoContainer>
            <Logo src="https://i.imgur.com/gxQYlsI.png" alt="logo" />
          </LogoContainer>
          <TextLogin>
            Olá,Faça o login para verificar
            <br />e organizar suas tarefas
          </TextLogin>
          <FieldsConatiener>
            <TextField
              fullWidth
              id="outlined-basic"
              label="CPF"
              variant="outlined"
            />

            <TextField
              style={{ marginTop: '20px' }}
              fullWidth
              id="outlined-basic"
              label="Senha"
              variant="outlined"
            />

            <ButtonLogin
              style={{ marginTop: '20px' }}
              onClick={() => navigate('/home')}
            >
              Acessar
            </ButtonLogin>
            <Section>
              <Checkbox defaultChecked />
              Manter conectado
            </Section>
            <ButtonForguet style={{ marginTop: '20px' }}>
              Esqueci minha senha
            </ButtonForguet>
          </FieldsConatiener>
        </Content>
      </RightSide>
    </MainContainer>
  );
};

export default Login;

Login.propTypes = {
  setUrl: PropTypes.any,
};
