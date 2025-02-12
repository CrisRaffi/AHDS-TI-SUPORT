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
} from './tasks.styled';

import { primary, iconColor } from '../../constants/colors.jsx';

import { Scrollbar } from 'react-scrollbars-custom';

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

import Content1 from './content1';
import Content2 from './content2';
import Content3 from './content3';

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

const Tasks = () => {
  const [progress, setProgress] = useState(50);
  const [showContent, setShowContent] = useState(1);

  const renderContent = () => {
    switch (showContent) {
      case 1:
        return <Content1 />;
      case 2:
        return <Content2 />;
      case 3:
        return <Content3 />;

      default:
        return <Content1 />;
    }
  };

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
              <TaskIten onClick={() => setShowContent(1)}>
                <RadioDone />
                Task 1 - Carla
              </TaskIten>
              <TaskIten onClick={() => setShowContent(2)}>
                <RadioDone />
                Task 2 - Carla
              </TaskIten>
              <TaskIten onClick={() => setShowContent(3)}>
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
              <TaskIten onClick={() => setShowContent(2)}>
                <RadioDone />
                Task 1 - Lisiane
              </TaskIten>
              <TaskIten onClick={() => setShowContent(1)}>
                <RadioNDone />
                Task 2 - Carla
              </TaskIten>
              <TaskIten onClick={() => setShowContent(3)}>
                <RadioNDone />
                Task 3 - Régis
              </TaskIten>
              {/* ---------------------------- */}
            </ContentContainerLeftList>
          </ContentContainerLeft>
          <Scrollbar
            style={{
              width: 'calc(100% - 310px)',
              height: '100%',
              overflow: 'auto',
              backgroundColor: '#f6f5fa',
            }}
          >
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
              {renderContent()}
            </ContentContainerRight>
          </Scrollbar>
        </ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Tasks;
