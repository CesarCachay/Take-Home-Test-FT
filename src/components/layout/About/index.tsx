import React from 'react';
import { FlexContainer, Typography } from 'components/atoms';
import profilePhoto from 'assets/profile_photo.jpeg';

const About: React.FC<{ path: string }> = () => {
  return (
    <FlexContainer>
      <FlexContainer>
        <img
          src={profilePhoto}
          alt='author-profile-img'
          style={{ width: '250px' }}
        />
        <Typography>Take Home Test</Typography>
        <Typography>FULLTIMEFORCE</Typography>
        <Typography>By Cesar Cachay</Typography>
      </FlexContainer>
    </FlexContainer>
  );
};

export default About;
