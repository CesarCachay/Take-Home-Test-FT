import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { getUsers, getUserProfile, searchUsers } from 'services';
import { Router } from '@reach/router';
import { Navbar } from 'components/molecules';
import { Home } from 'components/organisms';
import { About, NotFound } from 'components/layout';

const App: React.FC = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

  React.useEffect(() => {
    getUsers();
    getUserProfile('cesarCachay');
    searchUsers('cesarCachay');
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Router>
        <Home path='/' />
        <About path='/about' />
        <NotFound default />
      </Router>
    </React.Fragment>
  );
};

export default App;
