import React from 'react';
import { getUsers, getUserProfile, searchUsers } from 'services';
import { Router } from '@reach/router';
import { About, NotFound } from 'components/layout';
import { Home } from 'components/organisms';

const App: React.FC = () => {
  React.useEffect(() => {
    getUsers();
    getUserProfile('cesarCachay');
    searchUsers('cesarCachay');
  }, []);

  return (
    <Router>
      <Home path='/' />
      <About path='/about' />
      <NotFound default />
    </Router>
  );
};

export default App;
