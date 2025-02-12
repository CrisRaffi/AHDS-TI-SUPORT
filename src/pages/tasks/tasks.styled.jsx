import styled from 'styled-components';
import {
  iconContainerColor,
  primary,
  secondaryText,
  primaryText,
  iconColor,
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

  display: flex;
  flex-direction: column;
`;

export const InfoBar = styled.div`
  margin-top: -40px;
  width: 100%;
  height: 200px;

  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

  z-index: 100;

  display: flex;
  justify-content: space-between;
`;

export const InfoBarLeftSide = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InfoBarLeftSideTitle = styled.div`
  width: 80%;
  height: 30%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  font-size: 14px;
  color: ${primaryText};
`;

export const BarProgressContainer = styled.div`
  width: 80%;
  height: 45%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoBarLeftSideText = styled.div`
  width: 80%;
  height: 30%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  color: ${primaryText};
`;

export const InfoBarCenterSide = styled.div`
  width: 45%;
  height: 100%;
`;

export const InfoBarCenterSideTop = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  font-size: 14px;
  color: ${primaryText};
`;

export const InfoBarCenterSideButtonsContainer = styled.div`
  width: 100%;
  height: 55%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.div`
  font-size: 14px;
  background-color: #efe8fffb;
  padding: 15px 35px;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  align-items: center;

  color: ${primary};

  cursor: pointer;
`;

export const InfoBarRightSide = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  color: ${primary};
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);

  display: flex;
`;

export const ContentContainerLeft = styled.div`
  width: 300px;
  height: 100%;

  background-color: #fff;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 70px;

  border-bottom: solid 1px #e2e2e2;
`;

export const ContentContainerRight = styled.div`
  width: calc(100% - 310px);
  height: 100%;

  background-color: #f6f5fa;
`;
