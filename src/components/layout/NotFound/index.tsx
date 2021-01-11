import React from 'react';
import { FlexContainer, Typography } from 'components/atoms';
import notFoundImage from 'assets/notFound.gif';

const NotFound: React.FC<{ default: boolean }> = () => {
  return (
    <FlexContainer>
      <FlexContainer>
        <Typography>Not Found</Typography>
        <Typography>The page are you looking does not exist</Typography>
      </FlexContainer>
      <FlexContainer>
        <img src={notFoundImage} alt='Page Not Found' />
      </FlexContainer>
    </FlexContainer>
  );
};

export default NotFound;
