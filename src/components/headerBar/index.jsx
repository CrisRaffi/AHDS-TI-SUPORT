import { useState } from 'react';

import PropTypes from 'prop-types';

import {
  HomeHeader,
  LightSmallBall,
  HomeHeaderLeftSide,
  HomeHeaderLeftRight,
} from './headerBar.styled.jsx';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { primary } from '../../constants/colors.jsx';

import { useNavigate } from 'react-router';

const HeaderBar = (props) => {
  const navigate = useNavigate();

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = dd + '/' + mm + '/' + yyyy;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    marginRight: '20px',
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 0px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  return (
    <HomeHeader>
      <HomeHeaderLeftSide>
        <LightSmallBall />
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography disable color="textDisabled">
            {props.title}
          </Typography>
          <Typography sx={{ color: 'text.primary' }}>
            {formattedToday}
          </Typography>
        </Breadcrumbs>
      </HomeHeaderLeftSide>
      <HomeHeaderLeftRight>
        <Stack direction="row" spacing={2} style={{ marginRight: 40 }}>
          <Avatar
            style={{
              border: 'solid 1px #ccc',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <FolderIcon style={{ color: primary, fontSize: '20px' }} />
          </Avatar>
          <Avatar
            style={{
              border: 'solid 1px #ccc',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <PageviewIcon style={{ color: primary, fontSize: '20px' }} />
          </Avatar>
          <Avatar
            style={{
              border: 'solid 1px #ccc',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <AssignmentIcon style={{ color: primary, fontSize: '20px' }} />
          </Avatar>
        </Stack>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Cristian " src="/static/images/avatar/1.jpg" />
        </StyledBadge>{' '}
        Cristian Raffi{' '}
      </HomeHeaderLeftRight>
    </HomeHeader>
  );
};

export default HeaderBar;

HeaderBar.propTypes = {
  title: PropTypes.string,
};
