import { useState } from 'react';

import { MainContainer, HomeContent, ContentContainer } from './default.styled';

import HeaderBar from '../../components/headerBar';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const Default = (props) => {
  const navigate = useNavigate();

  props.setUrl(window.location.pathname);
  return (
    <MainContainer>
      <HomeContent>
        <HeaderBar title="default" />
        <ContentContainer></ContentContainer>
      </HomeContent>
    </MainContainer>
  );
};

export default Default;

Default.propTypes = {
  setUrl: PropTypes.any,
};
