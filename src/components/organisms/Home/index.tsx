import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexContainer, Typography, Button } from 'components/atoms';
import { Search } from 'components/molecules';
import theme from 'util/theme';

const HomeContainer = styled(FlexContainer)`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Home: React.FC<{ path: string }> = () => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <HomeContainer container direction='column'>
      <FlexContainer container justify='center' alignItems='center'>
        <FlexContainer width='80%' direction='column'>
          <Search
            height='60px'
            width='100%'
            placeholder='Username here'
            searchValue={inputValue}
            onSubmit={() => console.log('ga')}
            onChangeValue={(value: string) => setInputValue(value)}
          />
          <Button
            height='60px'
            width='200px'
            padding='15px'
            bgColor={theme.colors.darkBgColor}
            onClick={() => console.log('go')}
          >
            Search
          </Button>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer width='80%' direction='column'>
        <FlexContainer width='200px' height='200px'>
          USERS HERE
        </FlexContainer>
      </FlexContainer>
    </HomeContainer>
  );
};

export default Home;
