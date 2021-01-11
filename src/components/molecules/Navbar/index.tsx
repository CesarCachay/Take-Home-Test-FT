import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from 'components/atoms';
import { Link } from '@reach/router';
import theme from 'util/theme';

const NavbarContainer = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 25px;
  font-size: 28px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 10px;
  margin: 0 30px;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.placeholderColor};
  }

  h5 {
    padding: 0;
    margin: 0 0 0 5px;
    &:hover {
      color: ${theme.colors.placeholderColor};
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer
      justify='space-between'
      alignItems='center'
      bgColor='black'
    >
      <StyledLink to='/'>
        <i className='fab fa-github'></i>
        <h5>FULLTIMEFORCE TEST</h5>
      </StyledLink>
      <StyledLink to='/about'>About</StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;
