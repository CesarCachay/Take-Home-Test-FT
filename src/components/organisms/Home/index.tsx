import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { FlexContainer, Button } from 'components/atoms';
import { Search, UsersList } from 'components/molecules';
import { searchUsers } from 'services';
import theme from 'util/theme';
import { HomeProps } from './types';
let timeoutKeyPress = null;

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
  const [error, setError] = useState<boolean>(false);

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

  const handleSearch = () => {
    if (inputValue === '') {
      enqueueSnackbar('Search input is empty.', {
        variant: 'error',
      });
    }
    searchUsers(inputValue)
      .then((response) => {
        const { data } = response;
        if (data.items.length === 0) {
          enqueueSnackbar('We could not find results.', {
            variant: 'error',
          });
        }
        const formattedResults = data.items.map((user) => ({
          id: user.id,
          avatarUrl: user.avatar_url,
          name: user.login,
        }));
        setUsersList(formattedResults);
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar('We could not find results.', {
          variant: 'error',
        });
      });
  };

  const handleKeyUp = () => {
    if (timeoutKeyPress) {
      clearTimeout(timeoutKeyPress);
      timeoutKeyPress = null;
    }
    if (inputValue.length > 3) {
      timeoutKeyPress = setTimeout(() => {
        searchUsers(inputValue)
          .then((response) => {
            const { data } = response;
            if (data.items.length === 0) {
              enqueueSnackbar('We could not find results.', {
                variant: 'error',
              });
              setError(true);
            }
            const formattedResults = data.items.map((user) => ({
              id: user.id,
              avatarUrl: user.avatar_url,
              name: user.login,
            }));
            setUsersList(formattedResults);
          })
          .catch((error) => {
            console.error(error);
            enqueueSnackbar('We could not find results.', {
              variant: 'error',
            });
          });
      }, 800);
    }
  };

  return (
    <HomeContainer container direction='column'>
      <FlexContainer container justify='center' alignItems='center'>
        <FlexContainer width='80%'>
          <Search
            height='60px'
            width='90%'
            placeholder='Username here'
            searchValue={inputValue}
            onSubmit={() => handleSearch()}
            onChangeValue={(value: string) => {
              setInputValue(value);
              handleKeyUp();
            }}
          />
          <Button
            height='60px'
            width='200px'
            margin='0'
            padding='15px'
            bgColor={theme.colors.darkBgColor}
            onClick={() => handleSearch()}
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
        {!error && <UsersList users={usersList} />}
      </FlexContainer>
    </HomeContainer>
  );
};

export default Home;
