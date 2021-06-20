import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { spacing } from '@material-ui/system';
import Header from './components/Header';
import Home from './containers/Home';
import { lightBlue, cyan, teal, green } from '@material-ui/core/colors'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [userToggleDarkMode, setUserToggleDarkMode] = useState(true);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackSeverity, setSnaceSeverity] = useState('info');

  const theme = React.useMemo(
    () => {
      if (prefersDarkMode || userToggleDarkMode) {
        return createMuiTheme({
          palette: {
            type: 'dark',
            primary: teal,
            secondary: green,
          },
        });
      } else {
        return createMuiTheme({
          palette: {
            type: 'light',
          },
        });
      }
    },
    [prefersDarkMode, userToggleDarkMode],
  );

  const displaySnackMessage = (message, severity='info') => {
    setSnackOpen(true);
    setSnackMessage(message);
    setSnaceSeverity(severity);
  };

  const handleSnackClose = (event, reason) => {
    setSnackOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={4000}
        open={snackOpen}
        message="I love snacks"
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={snackSeverity}
          variant='filled'
        >
          {snackMessage}
        </Alert>
      </Snackbar>
      <Container fixed style={{ paddingTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Router>
              <Header
                userToggleDarkMode={userToggleDarkMode}
                setUserToggleDarkMode={setUserToggleDarkMode}
              />
              <Box paddingTop={4} paddingX={0} justifyContent="center" alignItems='center' display='flex'>
                <Switch>
                  <Route exact path='/'>
                    <Home displaySnackMessage={displaySnackMessage}/>
                  </Route>
                  {/* add other routing path by <Route path='??'>...</Route> */}
                </Switch>
              </Box>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
