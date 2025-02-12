import styled from 'styled-components';
import { primary } from '../../constants/colors.jsx';

export const HomeHeader = styled.div`
  max-width: 100%;
  min-height: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: solid 1px #e2e2e2;

  margin-bottom: 40px;
  padding: 0px 30px;
`;

export const HomeHeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeHeaderLeftRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const LightSmallBall = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 15px;
  background-color: ${primary};
`;
