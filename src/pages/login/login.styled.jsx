import styled from 'styled-components';
import {
  iconContainerColor,
  primary,
  secondaryText,
  primaryText,
} from '../../constants/colors.jsx';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 25%;
  height: 100%;
  background-color: ${primary};
`;

export const MidleSide = styled.div`
  width: 10%;
  height: 100%;
`;

export const ArtLogin = styled.img`
  width: 35%;
  position: fixed;
  top: 18%;
  left: 5%;
`;

export const RightSide = styled.div`
  width: 65%;
  height: 100%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;

  margin-left: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const TextLogin = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  color: ${primaryText};

  text-align: center;

  margin-top: 20px;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const FieldsConatiener = styled.div`
  margin-top: 50px;
  width: 70%;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${primary};
  border-radius: 8px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  &:hover {
    background-color: #5d7cfaab;
    transition: 0.2s;
  }

  margin-bottom: 20px;
`;

export const Section = styled.div`
  width: 100%;
  height: 50px;
  color: ${primaryText};
  font-size: 14px;
  margin-bottom: 100px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonForguet = styled.button`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-radius: 8px;
  color: ${primary};

  border: solid 1px ${primary};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  cursor: pointer;
`;
