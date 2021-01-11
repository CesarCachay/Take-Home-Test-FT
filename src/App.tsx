import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { getUsers } from 'services';
import { Router } from '@reach/router';
import { Navbar } from 'components/molecules';
import { Home } from 'components/organisms';
import { About, NotFound } from 'components/layout';
import theme from 'util/theme';

const App: React.FC = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getUsers()
      .then((response) => {
        const { data } = response;
        setUsersList(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <ThemeProvider theme={theme}>
        <Router>
          <Home path='/' users={usersList} />
          <About path='/about' />
          <NotFound default />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
