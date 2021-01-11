/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import {
  FlexContainer,
  Typography,
  Card,
  Button,
  Spinner,
} from 'components/atoms';
import theme from 'util/theme';
import { UsersListProps, UserItemProps, UserType } from './types';

const UsersContainer = styled(FlexContainer)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

const StyledLink = styled(Link)`
  color: white;
  padding: 10px;
  margin: 0 30px;
  background-color: black;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.placeholderColor};
  }
  &:focus {
    outline: none;
  }
`;

const UserItem: React.FC<UserItemProps> = ({ user }) => (
  <Card shadowLow width='300px'>
    <img src={user.avatarUrl} alt='user-profile' style={{ width: '60px', borderRadius: '100%' }} />
    <Typography margin='10px 0' fontSize='20px'>{user.name}</Typography>
    <StyledLink to={`user/${user.name}`} title='more-info'>
      More
    </StyledLink>
  </Card>
);

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <FlexContainer container>
      {users.length > 0 ? (
        <UsersContainer justify='space-around'>
          {users.map((user: UserType) => (
            <UserItem user={user} key={user.id} />
          ))}
        </UsersContainer>
      ) : (
          <Spinner />
        )}
    </FlexContainer>
  );
};

export default UsersList;
