import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from 'components/atoms';

const HomeContainer = styled(Container)`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Home: React.FC<{ path: string }> = () => {
  return (
    <HomeContainer>
      <Typography>Home</Typography>
    </HomeContainer>
  );
};

export default Home;
