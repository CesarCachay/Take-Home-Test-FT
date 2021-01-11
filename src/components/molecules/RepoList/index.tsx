import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Typography } from 'components/atoms';
import { RepoListProps, RepoInfoType } from './types';

const RepoItemContainer = styled(FlexContainer)`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  padding: 10px;
  height: 130px;
  width: 300px;
  margin: 20px 0px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const RepoListContainer = styled(FlexContainer)`
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  margin: 0px 30px;
`;

const RepoItem: React.FC<{ data: RepoInfoType }> = ({ data }) => (
  <RepoItemContainer>
    <Typography color='blue' fontSize='18px' fontWeight={700}>
      {data.name}
    </Typography>
    <Typography>{data.description}</Typography>
    <FlexContainer width='100%' justify='flex-end' alignItems='center'>
      <Typography margin='0 10px 0 0'>Language: {data.language}</Typography>
    </FlexContainer>
  </RepoItemContainer>
);

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <RepoListContainer container>
      {repos.map((repo: RepoInfoType) => (
        <RepoItem key={repo.id} data={repo} />
      ))}
    </RepoListContainer>
  );
};

export default RepoList;
