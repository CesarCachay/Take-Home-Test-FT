import React from 'react';
import { FlexContainer, Typography } from 'components/atoms';
import profilePhoto from 'assets/profile_photo.jpeg';
import fulltimeforceLogo from 'assets/fulltimeforce-logo.png';
import ableLogo from 'assets/able-logo.png';
import aimoLogo from 'assets/aimo-logo.svg';
import theme from 'util/theme';

const About: React.FC<{ path: string }> = () => {
  return (
    <FlexContainer container justify='center'>
      <FlexContainer
        width='80%'
        justify='center'
        alignItems='center'
        margin='20px 0'
        padding='20px'
        borderColor={theme.colors.borderColor}
      >
        <FlexContainer
          direction='column'
          justify='center'
          alignItems='center'
          width='50%'
        >
          <img
            src={profilePhoto}
            alt='author-profile-img'
            style={{ width: '250px' }}
          />
          <Typography margin='10px 0' fontWeight={700} fontSize='18px'>
            Project: Take Home Test
          </Typography>
          <FlexContainer alignItems='center' margin='10px 0'>
            <Typography fontWeight={700} fontSize='18px'>
              Company:
            </Typography>
            <img
              src={fulltimeforceLogo}
              alt='fulltimeforce-logo'
              style={{ width: '120px' }}
            />
          </FlexContainer>
          <Typography margin='10px 0' fontWeight={700} fontSize='18px'>
            By Cesar Cachay
          </Typography>
        </FlexContainer>
        <FlexContainer direction='column' width='50%'>
          <Typography fontSize='22px' fontWeight={700} margin='10px 0'>
            Working Experience
          </Typography>
          <FlexContainer
            width='500px'
            direction='column'
            padding='20px'
            margin='10px 0 20px 0'
            borderColor={theme.colors.borderColor}
          >
            <FlexContainer alignItems='center'>
              <Typography margin='0 15px 0 0'>Company:</Typography>
              <img
                src={aimoLogo}
                style={{ width: '150px', margin: '30px 0' }}
                alt='aimo- logo'
              />
            </FlexContainer>
            <Typography margin='10px 0'>
              Job Position: React Developer
            </Typography>
            <Typography>Tech Stack: React JS, Next JS and Express</Typography>
          </FlexContainer>
          <FlexContainer
            width='500px'
            direction='column'
            padding='20px'
            borderColor={theme.colors.borderColor}
          >
            <FlexContainer alignItems='center'>
              <Typography>Company:</Typography>
              <img
                src={ableLogo}
                style={{ width: '120px', height: '110px' }}
                alt='able-logo'
              />
            </FlexContainer>
            <Typography margin='10px 0'>
              Job Position: Software Engineer Intern
            </Typography>
            <Typography>Tech Stack: React JS and Ruby on Rails</Typography>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default About;
