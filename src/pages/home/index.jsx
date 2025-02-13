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
  ContentContainerRigtSide,
  ProressAndConquests,
  Progress,
  Conquest,
  ProgressTitle,
  ProgressCard,
} from './home.styled';

import { iconColor, primary } from '../../constants/colors.jsx';

import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

import HeaderBar from '../../components/headerBar';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import * as motion from 'motion/react-client';

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
            <ProressAndConquests>
              <Progress>
                <ProgressTitle>
                  <AssessmentOutlinedIcon
                    style={{
                      color: primary,
                      fontSize: '30px',
                      marginRight: 10,
                    }}
                  />
                  Meu progresso
                </ProgressTitle>
                <ProgressCard></ProgressCard>
              </Progress>
              <Conquest>
                <ProgressTitle>
                  <AutoAwesomeOutlinedIcon
                    style={{
                      color: primary,
                      fontSize: '30px',
                      marginRight: 10,
                    }}
                  />
                  Minhas conquistas
                </ProgressTitle>
                <ProgressCard></ProgressCard>
              </Conquest>
            </ProressAndConquests>
          </ContentContainerLeftSide>
          <ContentContainerRigtSide></ContentContainerRigtSide>
        </ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Home;

Home.propTypes = {
  setUrl: PropTypes.any,
};
