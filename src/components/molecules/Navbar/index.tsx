import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/atoms';
import { Link } from '@reach/router';

const NavbarContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 25px;
  font-size: 28px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  padding: 10px;
  margin: 0 30px;
  text-decoration: none;

  &:hover {
    color: green;
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
      </StyledLink>
      <StyledLink to='/about'>About</StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;
