import { useState } from 'react';

import {
  MainContainer,
  HomeContent,
  ContentContainer,
  InfoBar,
  InfoBarLeftSide,
  InfoBarCenterSide,
  InfoBarRightSide,
  InfoBarLeftSideTitle,
  InfoBarLeftSideText,
  BarProgressContainer,
  InfoBarCenterSideTop,
  InfoBarCenterSideButtonsContainer,
  Button,
  ContentContainerLeft,
  ContentContainerRight,
  SearchBarContainer,
  ContentContainerLeftList,
  WeekTab,
  TaskIten,
  RadioDone,
  RadioNDone,
  ContentContainerRightHeader,
  WhiteSquare,
  MainContent,
  MainContentTitle,
  MainContentText,
  ContentImage,
} from './tasks.styled';

import { primary, iconColor } from '../../constants/colors.jsx';

import HeaderBar from '../../components/headerBar';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '160px', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const Default = () => {
  const [progress, setProgress] = useState(50);

  return (
    <MainContainer>
      <HomeContent>
        <HeaderBar title="Tasks" />
        <InfoBar>
          <InfoBarLeftSide>
            <InfoBarLeftSideTitle>Progresso</InfoBarLeftSideTitle>
            <InfoBarLeftSideText>
              Desenvolvimento de Tasks Diárias
            </InfoBarLeftSideText>
            <BarProgressContainer>
              <LinearProgressWithLabel
                style={{
                  height: '10px',
                  borderRadius: '8px',
                }}
                value={progress}
                variant="determinate"
              />
            </BarProgressContainer>
          </InfoBarLeftSide>
          <InfoBarCenterSide>
            <InfoBarCenterSideTop>Selecionar formato</InfoBarCenterSideTop>
            <InfoBarCenterSideButtonsContainer>
              <Button style={{ backgroundColor: primary, color: '#efe8fffb' }}>
                <VideoCameraFrontIcon
                  style={{
                    color: '#efe8fffb',
                    fontSize: '24px',
                    marginRight: '15px',
                  }}
                />
                Video
              </Button>
              <Button>
                <VolumeDownIcon
                  style={{
                    color: primary,
                    fontSize: '24px',
                    marginRight: '15px',
                  }}
                />
                Áudio
              </Button>
              <Button>
                <ModeEditOutlineIcon
                  style={{
                    color: primary,
                    fontSize: '24px',
                    marginRight: '15px',
                  }}
                />
                Texto
              </Button>
            </InfoBarCenterSideButtonsContainer>
          </InfoBarCenterSide>
          <InfoBarRightSide>
            <ForumOutlinedIcon
              style={{
                color: primary,
                fontSize: '24px',
                marginRight: '15px',
              }}
            />
            Falar com cliente
          </InfoBarRightSide>
        </InfoBar>
        <ContentContainer>
          <ContentContainerLeft>
            <SearchBarContainer>Lista de Tarefas</SearchBarContainer>
            <ContentContainerLeftList>
              <WeekTab>
                <CalendarMonthOutlinedIcon
                  style={{
                    color: iconColor,
                    fontSize: '24px',
                    marginRight: '15px',
                  }}
                />
                Semana 1
              </WeekTab>
              <TaskIten>
                <RadioDone />
                Task 1 - Carla
              </TaskIten>
              <TaskIten>
                <RadioDone />
                Task 2 - Carla
              </TaskIten>
              <TaskIten>
                <RadioNDone />
                Task 3 - Lisiane
              </TaskIten>
              {/* ---------------------------- */}
              <WeekTab>
                <CalendarMonthOutlinedIcon
                  style={{
                    color: iconColor,
                    fontSize: '24px',
                    marginRight: '15px',
                  }}
                />
                Semana 2
              </WeekTab>
              <TaskIten>
                <RadioDone />
                Task 1 - Lisiane
              </TaskIten>
              <TaskIten>
                <RadioNDone />
                Task 2 - Carla
              </TaskIten>
              <TaskIten>
                <RadioNDone />
                Task 3 - Régis
              </TaskIten>
              {/* ---------------------------- */}
            </ContentContainerLeftList>
          </ContentContainerLeft>
          <ContentContainerRight>
            <ContentContainerRightHeader>
              <WhiteSquare>
                <LibraryBooksOutlinedIcon
                  style={{
                    color: primary,
                    fontSize: '24px',
                  }}
                />
              </WhiteSquare>
            </ContentContainerRightHeader>
            <MainContent>
              <MainContentTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                ipsam quia veniam obcaecati ea harum natus distinctio.
              </MainContentTitle>
              <MainContentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nostrum placeat enim minima incidunt molestiae, dicta
                aut rerum, iusto nulla facere quibusdam fuga exercitationem sit,
                consequatur voluptate! Id, maiores incidunt!
              </MainContentText>
              <ContentImage
                src="https://i.imgur.com/Mx4UQ6R.png"
                alt="ilustration"
              />
            </MainContent>
          </ContentContainerRight>
        </ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Default;
