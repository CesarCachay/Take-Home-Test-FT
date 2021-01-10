import React from 'react';
import { getUsers, getUserProfile, searchUsers } from 'services';

const App: React.FC = () => {
  React.useEffect(() => {
    getUsers();
    getUserProfile('cesarCachay');
    searchUsers('cesarCachay');
  }, []);

  return (
    <div>
      Starting project called take-home-test using React JS and Typescript
    </div>
  );
};

export default App;
