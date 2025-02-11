import { useState } from 'react';

import {
  MainContainer,
  HomeContent,
  ContentContainer,
  LeftSide,
  CenterSide,
  RightSide,
  ContentTitle,
  ContentIntemsContainer,
  ContentIntem,
  ContentIntemSquareIcon,
  ContentTextContainer,
  ContentBtnContainer,
  CardTitle,
  CardSubTitle,
} from './home.styled';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import HeaderBar from '../../components/headerBar';

import { iconColor } from '../../constants/colors.jsx';

const Home = () => {
  return (
    <MainContainer>
      <HomeContent>
        <HeaderBar />
        <ContentContainer>
          <LeftSide></LeftSide>
          <CenterSide>
            <ContentTitle>Chamados em aberto</ContentTitle>
            <ContentIntemsContainer>
              {/*ITENS */}
              <ContentIntem>
                <ContentIntemSquareIcon>
                  <InsertDriveFileIcon
                    style={{ color: iconColor, fontSize: '30px' }}
                  />
                </ContentIntemSquareIcon>
                <ContentTextContainer>
                  <CardTitle>Chamado #001</CardTitle>
                  <CardSubTitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </CardSubTitle>
                </ContentTextContainer>
                <ContentBtnContainer>Acessar</ContentBtnContainer>
              </ContentIntem>
              {/*------------------------------------*/}
              {/*ITENS */}
            </ContentIntemsContainer>
          </CenterSide>
          <RightSide></RightSide>
        </ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Home;
