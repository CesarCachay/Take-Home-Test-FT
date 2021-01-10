import React from 'react';
import { Container, Typography } from 'components/atoms';
import notFoundImage from 'assets/notFound.gif';

const NotFound: React.FC<{ default: boolean }> = () => {
  return (
    <Container>
      <Container>
        <Typography>Not Found</Typography>
        <Typography>The page are you looking does not exist</Typography>
      </Container>
      <Container>
        <img src={notFoundImage} alt='Page Not Found' />
      </Container>
    </Container>
  );
};

export default NotFound;
