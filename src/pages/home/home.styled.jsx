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

export const LeftSide = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const LeftSideContainer = styled.div`
  width: 80%;
  height: 100%;
`;

export const LeftItem = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  margin-bottom: 10px;
`;

export const LeftItemSqaure = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #edf1ff;
`;

export const LeftItemtext = styled.div`
  width: calc(100% - 70px);
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${primary};
`;

export const Divisoria = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
`;

export const CenterSide = styled.div`
  width: 50%;
  height: 97%;

  background-color: #f7f7f7;

  border-radius: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  width: calc(100% - 70px);
  height: 60px;

  display: flex;
  align-items: flex-end;

  font-size: 18px;

  color: ${primaryText};
`;

export const ContentIntemsContainer = styled.div`
  margin-top: 40px;
  width: calc(100% - 70px);
  height: calc(100% - 120px);

  overflow-y: auto;
`;

export const ContentIntem = styled.div`
  width: 100%;
  height: 85px;

  background-color: #fff;
  border-radius: 15px;

  margin-bottom: 18px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 1px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContentIntemSquareIcon = styled.div`
  width: 60px;
  height: 60px;

  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${iconContainerColor};
`;

export const ContentTextContainer = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 50%;

  font-weight: bold;

  display: flex;
  align-items: flex-end;
  font-size: 16px;

  color: ${primaryText};
`;

export const CardSubTitle = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;
  font-size: 12px;

  color: ${secondaryText};
`;

export const ContentBtnContainer = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: ${primary};

  cursor: pointer;
`;

export const RightSide = styled.div`
  width: 30%;
  height: 100%;
`;

export const RightSideMiniHeader = styled.div`
  padding-left: 10%;
  width: 90%;
  height: 60px;

  display: flex;
  align-items: center;
`;

export const RightSideTitle = styled.div`
  padding-left: 10%;
  width: 90%;

  margin-top: 10px;
  font-size: 18px;
  color: ${primaryText};
`;

export const RightSideText = styled.div`
  padding-left: 10%;
  width: 80%;

  margin-top: 20px;

  font-size: 14px;
  color: ${secondaryText};
`;

export const WndroawImg = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  width: 22%;
  padding-bottom: 60px;
`;
