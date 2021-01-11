import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { getUserProfile, getUserRepos } from 'services';
import { FlexContainer, Typography, Pill, Spinner } from 'components/atoms';
import { RepoList } from 'components/molecules';
import theme from 'util/theme';

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

const StyledAnchor = styled.a`
  color: #fff;
  padding: 10px;
  margin: 0 30px;
  text-decoration: none;
  background-color: black;

  &:hover {
    color: ${theme.colors.placeholderColor};
  }
`;

const ProfileAvatar = styled.div<{ size: string; img: string }>`
  display: flex;
  margin: 20px 0;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 100%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid ${theme.colors.borderColor};

  &:hover {
    transition: 0.5s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const UserProfile: React.FC<{ path: string; userName: string }> = ({
  userName,
}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [reposList, setReposList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserProfile(userName)
      .then((response) => {
        const { data } = response;
        setUserInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getUserRepos(userName)
      .then((response) => {
        const { data } = response;
        const repoInfo = data.map((repo) => ({
          id: repo.id,
          htmlUrl: repo.html_url,
          name: repo.name,
          description: repo.description,
          language: repo.language,
        }));
        setReposList(repoInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (userInfo) {
      setLoading(false);
    }
  }, [userInfo]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <FlexContainer container alignItems='center' direction='column'>
      <FlexContainer width='90%' direction='column' alignItems='center'>
        <FlexContainer container margin='30px 0' alignItems='center'>
          <StyledLink to='/'>Back to Home</StyledLink>
          <Typography margin='0 8px 0 0'>Hireable:</Typography>
          {userInfo.hireable ? (
            <i className='fas fa-check' style={{ color: 'green' }} />
          ) : (
            <i className='fas fa-times-circle' style={{ color: 'red' }} />
          )}
        </FlexContainer>

        <FlexContainer
          width='100%'
          padding='20px 10px'
          justify='center'
          borderColor={theme.colors.borderColor}
        >
          <FlexContainer
            width='50%'
            alignItems='center'
            direction='column'
            style={{ borderRight: `2px solid ${theme.colors.borderColor}` }}
          >
            <ProfileAvatar img={userInfo.avatar_url} size='120px' />
            <Typography margin='10px 0'>Name: {userInfo.name}</Typography>
            <Typography margin='10px 0'>
              Location: {userInfo.location}
            </Typography>
          </FlexContainer>
          <FlexContainer
            width='50%'
            height='200px'
            justify='center'
            alignItems='center'
            direction='column'
          >
            <StyledAnchor href={userInfo.html_url}>
              Visit Github Profile
            </StyledAnchor>
            <Typography margin='20px 0'>Username: {userInfo.login}</Typography>
            {userInfo.company && (
              <Typography>Company: {userInfo.company}</Typography>
            )}
            <FlexContainer width='90%' justify='space-around' margin='20px 0'>
              <Pill bgColor={theme.colors.error} textColor='white'>
                Followers: {userInfo.followers}
              </Pill>
              <Pill bgColor={theme.colors.darkBgColor} textColor='white'>
                Following: {userInfo.following}
              </Pill>
              <Pill bgColor='green' textColor='white'>
                Public repos: {userInfo.public_repos}
              </Pill>
              <Pill bgColor='blue' textColor='white'>
                Public gists: {userInfo.public_gists}
              </Pill>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        width='90%'
        padding='20px 10px'
        margin='30px 0'
        justify='center'
        borderColor={theme.colors.borderColor}
      >
        <RepoList repos={reposList} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default UserProfile;
