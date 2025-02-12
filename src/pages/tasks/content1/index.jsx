import { useState } from 'react';

import {
  MainContent,
  MainContentTitle,
  MainContentText,
  ContentImage,
  BigWhitheSquare,
  BigWhitheSquareTitle,
  AvaliationContainer,
  AvaliationBlock,
  TextFuieldContainer,
} from '../tasks.styled';

import { primary } from '../../../constants/colors.jsx';

import TextField from '@mui/material/TextField';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const Content1 = () => {
  return (
    <MainContent>
      <MainContentTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam
        quia veniam obcaecati ea harum natus distinctio.
      </MainContentTitle>
      <MainContentText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        nostrum placeat enim minima incidunt molestiae, dicta aut rerum, iusto
        nulla facere quibusdam fuga exercitationem sit, consequatur voluptate!
        Id, maiores incidunt!
      </MainContentText>
      <ContentImage src="https://i.imgur.com/Mx4UQ6R.png" alt="ilustration" />
      <AvaliationContainer>
        Avaliação{' '}
        <AvaliationBlock>
          <ThumbUpOutlinedIcon
            style={{
              color: primary,
              fontSize: '20px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          />
          <ThumbDownOutlinedIcon
            style={{
              color: primary,
              fontSize: '20px',
              cursor: 'pointer',
            }}
          />
        </AvaliationBlock>
      </AvaliationContainer>
      <BigWhitheSquare>
        <BigWhitheSquareTitle>Anotações (3)</BigWhitheSquareTitle>
        <TextFuieldContainer>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Adicione uma nova anotação"
            multiline
            rows={6}
            variant="filled"
            defaultValue=""
          />
        </TextFuieldContainer>
      </BigWhitheSquare>
    </MainContent>
  );
};

export default Content1;
