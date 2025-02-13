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
  LeftSideContainer,
  LeftItem,
  LeftItemSqaure,
  LeftItemtext,
  Divisoria,
  RightSideMiniHeader,
  RightSideTitle,
  RightSideText,
  WndroawImg,
} from './home.styled';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ForumIcon from '@mui/icons-material/Forum';

import HeaderBar from '../../components/headerBar';

import { iconColor, primary, secondaryText } from '../../constants/colors.jsx';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router';

const Home = (props) => {
  const navigate = useNavigate();

  props.setUrl(window.location.pathname);
  return (
    <MainContainer>
      <HomeContent>
        <HeaderBar title="Tickets" />
        <ContentContainer>
          <LeftSide>
            <LeftSideContainer>
              {/*LSIDE ITENS */}
              <LeftItem>
                <LeftItemSqaure>
                  <MarkUnreadChatAltIcon
                    style={{ color: primary, fontSize: '26px' }}
                  />
                </LeftItemSqaure>
                <LeftItemtext style={{ fontWeight: 'bold' }}>
                  Abrir Chat
                </LeftItemtext>
              </LeftItem>
              {/*LSIDE ITENS */}
              <LeftItem>
                <LeftItemSqaure>
                  <ContactSupportIcon
                    style={{ color: primary, fontSize: '26px' }}
                  />
                </LeftItemSqaure>
                <LeftItemtext style={{ color: secondaryText }}>
                  Sugestões
                </LeftItemtext>
              </LeftItem>
              {/*LSIDE ITENS */}
              <LeftItem>
                <LeftItemSqaure>
                  <SupportAgentIcon
                    style={{ color: primary, fontSize: '26px' }}
                  />
                </LeftItemSqaure>
                <LeftItemtext style={{ color: secondaryText }}>
                  Ouvidoria
                </LeftItemtext>
              </LeftItem>
              {/*LSIDE ITENS */}
              <LeftItem onClick={() => navigate('/tasks')}>
                <LeftItemSqaure>
                  <AddTaskIcon style={{ color: primary, fontSize: '26px' }} />
                </LeftItemSqaure>
                <LeftItemtext style={{ color: secondaryText }}>
                  Tarefas
                </LeftItemtext>
              </LeftItem>
              <Divisoria />
              {/*LSIDE ITENS */}
              <LeftItem>
                <LeftItemSqaure>
                  <LibraryBooksIcon
                    style={{ color: primary, fontSize: '26px' }}
                  />
                </LeftItemSqaure>
                <LeftItemtext style={{ color: secondaryText }}>
                  Historico de atendimentos
                </LeftItemtext>
              </LeftItem>
            </LeftSideContainer>
          </LeftSide>
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
              <ContentIntem>
                <ContentIntemSquareIcon>
                  <InsertDriveFileIcon
                    style={{ color: iconColor, fontSize: '30px' }}
                  />
                </ContentIntemSquareIcon>
                <ContentTextContainer>
                  <CardTitle>Chamado #002</CardTitle>
                  <CardSubTitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </CardSubTitle>
                </ContentTextContainer>
                <ContentBtnContainer>Acessar</ContentBtnContainer>
              </ContentIntem>
              {/*------------------------------------*/}
              {/*ITENS */}
              <ContentIntem>
                <ContentIntemSquareIcon>
                  <InsertDriveFileIcon
                    style={{ color: iconColor, fontSize: '30px' }}
                  />
                </ContentIntemSquareIcon>
                <ContentTextContainer>
                  <CardTitle>Chamado #003</CardTitle>
                  <CardSubTitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </CardSubTitle>
                </ContentTextContainer>
                <ContentBtnContainer>Acessar</ContentBtnContainer>
              </ContentIntem>
              {/*------------------------------------*/}
              {/*ITENS */}
              <ContentIntem>
                <ContentIntemSquareIcon>
                  <InsertDriveFileIcon
                    style={{ color: iconColor, fontSize: '30px' }}
                  />
                </ContentIntemSquareIcon>
                <ContentTextContainer>
                  <CardTitle>Chamado #004</CardTitle>
                  <CardSubTitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </CardSubTitle>
                </ContentTextContainer>
                <ContentBtnContainer>Acessar</ContentBtnContainer>
              </ContentIntem>
              {/*------------------------------------*/}
            </ContentIntemsContainer>
          </CenterSide>
          <RightSide>
            <RightSideMiniHeader>
              <ForumIcon style={{ color: primary, fontSize: '30px' }} />
            </RightSideMiniHeader>
            <RightSideTitle>Como funciona o chat?</RightSideTitle>
            <RightSideText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              perferendis doloribus cum illum molestias libero quia cupiditate
              possimus debitis culpa eligendi accusamus eius id harum voluptas
              sapiente rerum? Exercitationem, et.
            </RightSideText>
            <WndroawImg src="https://i.imgur.com/hwg0O8e.png" alt="cellphone" />
          </RightSide>
        </ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Home;

Home.propTypes = {
  setUrl: PropTypes.any,
};
