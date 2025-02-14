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
  SquareIConContainer,
  SquareIConGreen,
  ConquestIten,
  TabelContainer,
  TableIten,
  ProfileInfos,
  AvatarContainer,
  ProfileInfosTitle,
  ProfileInfosSubTitle,
  TextInfos,
  LineContainer,
} from './home.styled';

import { iconColor, primary } from '../../constants/colors.jsx';

import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import HeaderBar from '../../components/headerBar';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import * as motion from 'motion/react-client';

import { Scrollbar } from 'react-scrollbars-custom';

import Avatar from '@mui/material/Avatar';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '350px', mr: 1 }}>
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

const Home = (props) => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(29);

  props.setUrl(window.location.pathname);
  return (
    <MainContainer>
      <motion.div
        style={{ width: '100%', height: '100%' }}
        whileHover={{
          scale: 1,
          transition: { duration: 0.2 },
        }}
      >
        <HomeContent>
          <HeaderBar title="Start" />
          <ContentContainer>
            <Scrollbar
              style={{
                width: '62%',
                height: '100%',
                overflowX: 'hidden !important',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}
            >
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
                    <ProgressCard>
                      <SquareIConContainer>
                        <SquareICon>
                          <WorkspacePremiumOutlinedIcon
                            style={{ color: iconColor, fontSize: '30px' }}
                          />
                        </SquareICon>
                        Média geral
                        <br />
                        100
                      </SquareIConContainer>
                      <SquareIConContainer>
                        <SquareIConGreen>
                          <ClassOutlinedIcon
                            style={{ color: '#b4e9e3', fontSize: '30px' }}
                          />
                        </SquareIConGreen>
                        EXP
                        <br />
                        300
                      </SquareIConContainer>
                    </ProgressCard>
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
                    <ProgressCard>
                      <ConquestIten>
                        <EmojiEventsOutlinedIcon
                          style={{
                            color: '#AD8A56',
                            fontSize: '60pt',
                          }}
                        />
                        Bronze
                      </ConquestIten>
                      <ConquestIten>
                        <EmojiEventsOutlinedIcon
                          style={{
                            color: '#D7D7D7',
                            fontSize: '60pt',
                          }}
                        />
                        Prata
                      </ConquestIten>
                      <ConquestIten>
                        <EmojiEventsOutlinedIcon
                          style={{
                            color: '#C9B037',
                            fontSize: '60pt',
                          }}
                        />
                        Ouro
                      </ConquestIten>
                      <ConquestIten>
                        <EmojiEventsOutlinedIcon
                          style={{
                            color: '#B9F2FF',
                            fontSize: '60pt',
                          }}
                        />
                        Diamante
                      </ConquestIten>
                    </ProgressCard>
                  </Conquest>
                </ProressAndConquests>
                <ProgressTitle style={{ height: 'auto', marginTop: 50 }}>
                  <TocOutlinedIcon
                    style={{
                      color: primary,
                      fontSize: '30px',
                      marginRight: 10,
                    }}
                  />
                  Áreas
                </ProgressTitle>
                <TabelContainer>
                  <TableIten>
                    <ProfileInfos>
                      <AvatarContainer>
                        <Avatar sx={{ width: 60, height: 60 }}>CR</Avatar>
                      </AvatarContainer>
                      <TextInfos>
                        <ProfileInfosTitle>Web design</ProfileInfosTitle>
                        <ProfileInfosSubTitle>
                          Macro certification
                        </ProfileInfosSubTitle>
                      </TextInfos>
                    </ProfileInfos>
                    <LineContainer>
                      <LinearProgressWithLabel
                        style={{
                          height: '10px',
                          borderRadius: '8px',
                        }}
                        value={100}
                        variant="determinate"
                      />
                    </LineContainer>
                  </TableIten>
                  {/* --------------------- */}
                  <TableIten>
                    <ProfileInfos>
                      <AvatarContainer>
                        <Avatar sx={{ width: 60, height: 60 }}>CA</Avatar>
                      </AvatarContainer>
                      <TextInfos>
                        <ProfileInfosTitle>Web design</ProfileInfosTitle>
                        <ProfileInfosSubTitle>
                          Macro certification
                        </ProfileInfosSubTitle>
                      </TextInfos>
                    </ProfileInfos>
                    <LineContainer>
                      <LinearProgressWithLabel
                        style={{
                          height: '10px',
                          borderRadius: '8px',
                        }}
                        value={90}
                        variant="determinate"
                      />
                    </LineContainer>
                  </TableIten>
                  {/* --------------------- */}
                  <TableIten>
                    <ProfileInfos>
                      <AvatarContainer>
                        <Avatar sx={{ width: 60, height: 60 }}>LI</Avatar>
                      </AvatarContainer>
                      <TextInfos>
                        <ProfileInfosTitle>Web design</ProfileInfosTitle>
                        <ProfileInfosSubTitle>
                          Macro certification
                        </ProfileInfosSubTitle>
                      </TextInfos>
                    </ProfileInfos>
                    <LineContainer>
                      <LinearProgressWithLabel
                        style={{
                          height: '10px',
                          borderRadius: '8px',
                        }}
                        value={60}
                        variant="determinate"
                      />
                    </LineContainer>
                  </TableIten>
                  {/* --------------------- */}
                  <TableIten>
                    <ProfileInfos>
                      <AvatarContainer>
                        <Avatar sx={{ width: 60, height: 60 }}>HR</Avatar>
                      </AvatarContainer>
                      <TextInfos>
                        <ProfileInfosTitle>Web design</ProfileInfosTitle>
                        <ProfileInfosSubTitle>
                          Macro certification
                        </ProfileInfosSubTitle>
                      </TextInfos>
                    </ProfileInfos>
                    <LineContainer>
                      <LinearProgressWithLabel
                        style={{
                          height: '10px',
                          borderRadius: '8px',
                        }}
                        value={20}
                        variant="determinate"
                      />
                    </LineContainer>
                  </TableIten>
                </TabelContainer>
              </ContentContainerLeftSide>
            </Scrollbar>
            <ContentContainerRigtSide></ContentContainerRigtSide>
          </ContentContainer>
        </HomeContent>
      </motion.div>
    </MainContainer>
  );
};

export default Home;

Home.propTypes = {
  setUrl: PropTypes.any,
  value: PropTypes.number.isRequired,
};
