import React from 'react';
import PropTypes from "prop-types";
import { Link } from "gatsby";
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

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  font-weight: 900;
  transition: 0.3s color ease-in-out;
  &:hover {
    color: var(--orange);
  }
`;

const Menu = () => {
return (
  <Navigation>
    <Container>
      <ul>
        <StyledLink to="/">
          <Logo>
            <FRlogo />
          </Logo>
        </StyledLink>
        <li>
          <spacer />
        </li>
        <StyledLink to="/membership">
          <li>Membership</li>
        </StyledLink>
        <StyledLink to="/training">
          <li>Personal Training</li>
        </StyledLink>
        <StyledLink to="/classes"><li>Classes</li></StyledLink>
       <StyledLink to="/team"><li>About</li></StyledLink>
      </ul>
    </Container>
  </Navigation>
);
}


export default Menu;
