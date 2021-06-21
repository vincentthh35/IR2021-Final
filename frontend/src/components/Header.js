import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import SunIcon from '@material-ui/icons/Brightness5';
import MoonIcon from '@material-ui/icons/Brightness2';
import AccessibleIcon from '@material-ui/icons/Accessible';
// routing
import { Link as RouterLink } from 'react-router-dom';

import { getPoems } from '../axios';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  toolbar: {
    minHeight: 60,
    paddingRight: 10,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='sticky'>
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={() => getPoems(0, 30)}>
            <AccessibleIcon />
          </IconButton>
          <Typography className={classes.title}>
            <Link color='inherit' underline='none' component={RouterLink} to='/'>
              不知道要叫什麼名字
            </Link>
          </Typography>
          <Tooltip title='Toggle light/dark theme'>
            <IconButton onClick={() => props.setUserToggleDarkMode(!props.userToggleDarkMode)}>
              { props.userToggleDarkMode ? <SunIcon /> : <MoonIcon /> }
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
