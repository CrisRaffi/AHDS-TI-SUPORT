import { useState } from 'react';

import { MainContainer, HomeContent, ContentContainer } from './default.styled';

import HeaderBar from '../../components/headerBar';

const Default = () => {
  return (
    <MainContainer>
      <HomeContent>
        <HeaderBar />
        <ContentContainer></ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Default;
