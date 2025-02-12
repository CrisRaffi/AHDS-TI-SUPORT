import styled from 'styled-components';
import {
  iconContainerColor,
  primary,
  secondaryText,
  primaryText,
  radioDone,
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

  overflow: hidden;
`;

export const InfoBar = styled.div`
  margin-top: -40px;
  width: 100%;
  min-height: 140px;

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

  color: ${secondaryText};
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainerLeftList = styled.div`
  width: 100%;
  height: calc(100% - 75px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeekTab = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TaskIten = styled.div`
  width: 60%;
  height: 40px;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 14px;

  color: ${primaryText};

  cursor: pointer;
`;

export const RadioDone = styled.div`
  width: 18px;
  height: 18px;

  background-color: ${radioDone};
  border-radius: 100%;

  margin-right: 15px;

  font-size: 14px;
`;

export const RadioNDone = styled.div`
  width: 16px;
  height: 16px;

  border: solid 2px ${primaryText};
  border-radius: 100%;

  margin-right: 15px;

  font-size: 14px;
`;

export const ContentContainerRight = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f6f5fa;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentContainerRightHeader = styled.div`
  width: 95%;
  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const WhiteSquare = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 8px;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const MainContent = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 66vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContentTitle = styled.div`
  width: 78%;
  font-size: 22px;
  font-weight: bold;
  color: ${primaryText};
`;

export const MainContentText = styled.div`
  margin-top: 40px;
  width: 78%;
  font-size: 14px;
  color: ${secondaryText};
`;

export const ContentImage = styled.img`
  margin-top: 50px;

  width: 35%;
`;

export const FrameContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;

  width: 78%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvaliationContainer = styled.div`
  width: 78%;
  color: ${secondaryText};

  display: flex;
  align-items: center;

  margin-bottom: 30px;
  margin-top: 30px;
`;

export const AvaliationBlock = styled.div`
  height: 30px;

  border-radius: 15px;
  border: solid 2px ${secondaryText};

  margin-left: 15px;

  padding: 0px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BigWhitheSquare = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
`;

export const BigWhitheSquareTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 78%;

  font-size: 16px;
  color: ${secondaryText};
`;

export const TextFuieldContainer = styled.div`
  width: 78%;
  margin-bottom: 50px;
`;
