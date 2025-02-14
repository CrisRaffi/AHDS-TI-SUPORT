import styled from 'styled-components';
import {
  iconContainerColor,
  primaryText,
  secondaryText,
  primary,
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

export const ContentContainerLeftSide = styled.div`
  width: 95%;
  height: 100%;

  margin-left: 30px;

  overflow-x: hidden;
`;

export const CarHeader = styled.div`
  width: 100%;
  height: 220px;

  border-radius: 15px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  display: flex;
`;

export const CarHeaderLeftSide = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  width: 80%;
  height: 80px;

  display: flex;
  align-items: flex-end;
  font-size: 20px;
  color: ${primaryText};
`;

export const CarHeaderLeftSideContent = styled.div`
  width: 80%;
  height: calc(100% - 80px);

  display: flex;
`;

export const CarHeaderLeftSideContentIconCard = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SquareICon = styled.div`
  width: 65px;
  height: 65px;

  border-radius: 15px;

  background-color: ${iconContainerColor};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 25px;
`;

export const SquareIConGreen = styled.div`
  width: 65px;
  height: 65px;

  border-radius: 15px;

  background-color: #e9f9fb;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 25px;
`;

export const CarHeaderLeftSideContentText = styled.div`
  width: 70%;
  height: 100%;
`;

export const CarHeaderRightSide = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Ilustration = styled.img`
  height: 108%;
`;

export const CarHeaderLeftSideContentTextTop = styled.div`
  width: 100%;
  height: 50%;

  color: ${primaryText};

  display: flex;
  align-items: flex-end;
`;

export const CarHeaderLeftSideContentTextBotton = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;

  color: ${primary};
  font-size: 14px;

  cursor: pointer;
`;

export const ContentContainerRigtSide = styled.div`
  width: 35%;
  height: 98%;

  margin-left: 30px;

  border-radius: 15px;

  background-color: #f7f7f7;
`;

export const ProressAndConquests = styled.div`
  width: 100%;
  height: 240px;

  margin-top: 30px;

  display: flex;
  justify-content: space-between;
`;

export const Progress = styled.div`
  width: 49%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProgressTitle = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  align-items: center;

  color: ${primaryText};
`;

export const ProgressCard = styled.div`
  width: 100%;
  height: 70%;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Conquest = styled.div`
  width: 49%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SquareIConContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${primaryText};
`;

export const ConquestIten = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryText};
  font-size: 14px;
`;

export const TabelContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 400px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
`;

export const TableIten = styled.div`
  width: calc(100% - 2px);
  height: 25%;

  border-bottom: solid 1px #ccc;

  display: flex;
  justify-content: space-between;
`;

export const ProfileInfos = styled.div`
  width: calc(25% - 20px);
  height: 100%;

  padding: 0px 20px;

  display: flex;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 60px;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const TextInfos = styled.div`
  width: calc(75% - 40px);
  margin-left: 20px;
`;

export const ProfileInfosTitle = styled.div`
  width: 100%;
  color: ${primaryText};
`;

export const ProfileInfosSubTitle = styled.div`
  width: 100%;
  color: ${secondaryText};
`;

export const LineContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
