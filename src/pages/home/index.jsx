import { useState } from 'react';

import {
  MainContainer,
  HomeContent,
  ContentContainer,
  ContentContainerLeftSide,
  CarHeader,
  CarHeaderLeftSide,
  CarHeaderRightSide,
  Ilustration,
  Title,
  CarHeaderLeftSideContent,
  CarHeaderLeftSideContentIconCard,
  CarHeaderLeftSideContentText,
  SquareICon,
  CarHeaderLeftSideContentTextTop,
  CarHeaderLeftSideContentTextBotton,
} from './home.styled';

import { iconColor } from '../../constants/colors.jsx';

import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

import HeaderBar from '../../components/headerBar';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const Home = (props) => {
  const navigate = useNavigate();

  props.setUrl(window.location.pathname);
  return (
    <MainContainer>
      <HomeContent>
        <HeaderBar title="Start" />
        <ContentContainer>
          <ContentContainerLeftSide>
            <CarHeader>
              <CarHeaderLeftSide>
                <Title>Bora resolver as pendências?</Title>
                <CarHeaderLeftSideContent>
                  <CarHeaderLeftSideContentIconCard>
                    <SquareICon>
                      <VideoLibraryOutlinedIcon
                        style={{ color: iconColor, fontSize: '30px' }}
                      />
                    </SquareICon>
                  </CarHeaderLeftSideContentIconCard>
                  <CarHeaderLeftSideContentText>
                    <CarHeaderLeftSideContentTextTop>
                      Ultima Tarefa
                    </CarHeaderLeftSideContentTextTop>
                    <CarHeaderLeftSideContentTextBotton>
                      Clique para acessar Tarefa
                    </CarHeaderLeftSideContentTextBotton>
                  </CarHeaderLeftSideContentText>
                </CarHeaderLeftSideContent>
              </CarHeaderLeftSide>
              <CarHeaderRightSide>
                <Ilustration
                  src="https://i.imgur.com/dG9D2Qa.png"
                  alt="ilustration"
                />
              </CarHeaderRightSide>
            </CarHeader>
          </ContentContainerLeftSide>
        </ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Home;

Home.propTypes = {
  setUrl: PropTypes.any,
};
