import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { FlexContainer, Button } from 'components/atoms';
import { Search, UsersList } from 'components/molecules';
import theme from 'util/theme';
import { HomeProps } from './types';

const HomeContainer = styled(FlexContainer)`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Home: React.FC<HomeProps> = ({ users }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [inputValue, setInputValue] = useState<string>('');
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (users.length > 0) {
      const modifiedUserInfo = users.map((user) => ({
        id: user.id,
        avatarUrl: user.avatar_url,
        name: user.login,
      }));
      setUsersList(modifiedUserInfo);
    }
  }, [users]);

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

      <FlexContainer
        container
        direction='column'
        alignItems='center'
        margin='20px 0'
      >
        <UsersList users={usersList} />
      </FlexContainer>
    </HomeContainer>
  );
};

export default Home;
