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
} from './tasks.styled';

import { primary } from '../../constants/colors.jsx';

import HeaderBar from '../../components/headerBar';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

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
  const [progress, setProgress] = useState(30);

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
            <InfoBarCenterSideTop>Formato preferido</InfoBarCenterSideTop>
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
            />{' '}
            Falar com cliente
          </InfoBarRightSide>
        </InfoBar>
        <ContentContainer>
          <ContentContainerLeft>
            <SearchBarContainer></SearchBarContainer>
          </ContentContainerLeft>
          <ContentContainerRight></ContentContainerRight>
        </ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Default;
