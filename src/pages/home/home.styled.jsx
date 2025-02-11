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
  height: 100px;

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
  color: ${primaryText};
`;

export const CardSubTitle = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;

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
