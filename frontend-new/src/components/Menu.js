import React from 'react';
import styled, { withTheme } from 'styled-components';
import Container from '../styles/ContainerStyle';

const Navigation = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  position: sticky;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content:space-between;
  }

  li {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
  }

  li + li {
    margin-left: 2em;
  }
`
;

const Logo = styled.li`
  flex: 1;
  font-weight: 900;
`

const Spacer = styled.div`
  flex: 1;
`;

const Menu = () => {
return (
  <Navigation>
    <Container>
      <ul>
        <Logo>Fitness Republic</Logo>
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
