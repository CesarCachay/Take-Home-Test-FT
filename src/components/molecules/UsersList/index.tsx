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

const UsersContainer = styled(FlexContainer)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const UserItem: React.FC<{ user: any }> = ({ user }) => (
  <Card>
    <img src={user.avatar_url} alt='user-profile' style={{ width: '60px' }} />
    <Typography>{user.login}</Typography>
    <Link to={`user/${user.login}`} title='more-info'>
      <Button
        bgColor={theme.colors.darkBgColor}
        padding='10px 20px'
        onClick={() => console.log('more')}
      >
        More
      </Button>
    </Link>
  </Card>
);

const UsersList: React.FC<{ users: any }> = ({ users }) => {
  return (
    <FlexContainer container>
      {users.length > 0 ? (
        <UsersContainer justify='space-around'>
          {users.map((user) => (
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
