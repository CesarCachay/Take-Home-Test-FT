import React from 'react';
import { Container, Typography } from 'components/atoms';
import profilePhoto from 'assets/profile_photo.jpeg';

const About: React.FC<{ path: string }> = () => {
  return (
    <Container>
      <Container>
        <img
          src={profilePhoto}
          alt='author-profile-img'
          style={{ width: '250px' }}
        />
        <Typography>Take Home Test</Typography>
        <Typography>FULLTIMEFORCE</Typography>
        <Typography>By Cesar Cachay</Typography>
      </Container>
    </Container>
  );
};

export default About;
