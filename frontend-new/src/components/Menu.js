import React from 'react';
import styled, { withTheme } from 'styled-components';
import Container from '../styles/ContainerStyle';
import FRlogo from '../assets/images/svg/fitness-republic-logo-header.svg';

const Navigation = styled.nav`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  box-shadow: 1px 0 16px rgba(100,40,40,.2);
  border-bottom: 1px solid var(--orange);
  top: 0;
  left: 0;
  right: 0;
  height: 6em;
  position: sticky;
  z-index: 1;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
  }

  li {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 500;
  }

  li + li {
    margin-left: 2em;
  }
`;

const Logo = styled.li`
  height: 1.8em;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Menu = () => {
return (
  <Navigation>
    <Container>
      <ul>
        <Logo><FRlogo/></Logo>
        <li><spacer/></li>
        <li>Membership</li>
        <li>Personal Training</li>
        <li>Classes</li>
        <li>About</li>
      </ul>
    </Container>
  </Navigation>
)
}


export default Menu;
