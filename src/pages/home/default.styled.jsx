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

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);

  display: flex;
`;
