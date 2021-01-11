import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import moment from 'moment';
import { getRepo } from 'services';
import { FlexContainer, Typography } from 'components/atoms';
import { UserRepoProps, CommitType, CommitItemProps } from './types';
import theme from 'util/theme';

const CommitContainer = styled(FlexContainer)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const StyledLink = styled(Link)`
  color: #fff;
  padding: 10px;
  margin: 0 30px;
  text-decoration: none;
  background-color: black;

  &:hover {
    color: ${theme.colors.placeholderColor};
  }
`;

const CommitItem: React.FC<CommitItemProps> = ({ data }) => (
  <CommitContainer
    width='500px'
    direction='column'
    padding='20px 10px'
    margin='10px 0'
    borderColor={theme.colors.borderColor}
  >
    <Typography>ID Commit: {data.id}</Typography>
    <Typography margin='0 0 10px 0'>
      Commit Date: {moment(data.date).format('LLLL')}
    </Typography>
    <Typography>Author Commit: {data.author}</Typography>
    <Typography>Author Email: {data.email}</Typography>
  </CommitContainer>
);

const UserRepo: React.FC<UserRepoProps> = ({ user, repo }) => {
  const [commitList, setCommitList] = useState([]);

  useEffect(() => {
    getRepo(user, repo)
      .then((response) => {
        const { data } = response;
        const formattedData = data.map((repo) => ({
          id: repo.sha,
          author: repo.commit.author.name,
          email: repo.commit.author.email,
          date: repo.commit.author.date,
        }));
        setCommitList(formattedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <FlexContainer container justify='center'>
      <FlexContainer direction='column'>
        <FlexContainer
          alignItems='center'
          padding='20px'
          margin='10px'
          borderColor={theme.colors.borderColor}
        >
          <StyledLink to={`/user/${user}`} title='go to user'>
            <i className='fa fa-arrow-left' style={{ marginRight: '10px' }}></i>
            Back to User
          </StyledLink>
          <Typography fontSize='22px' fontWeight={700} textAlign='center'>
            Repo Name: {repo}
          </Typography>
          <Typography fontSize='22px' fontWeight={700} textAlign='center'>
            Owner: {user}
          </Typography>
        </FlexContainer>
        <FlexContainer width='95%' direction='column' alignItems='center'>
          {commitList.map((commit: CommitType) => (
            <CommitItem data={commit} key={commit.id} />
          ))}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default UserRepo;
