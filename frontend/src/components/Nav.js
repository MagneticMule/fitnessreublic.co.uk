import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';


const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
  }
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    text-align: center;
    list-style: none;

    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;

    li {
      --rotate: -2deg;
      transform: rotate(var(--rotate));
      order: 1;

      &:nth-child(1) {
        --rotate: 1deg;
      }
      &:nth-child(2) {
        --rotate: -2.5deg;
      }
      &:nth-child(4) {
        --rotate: -2.5deg;
      }

      &:hover {
        --rotate: calc(var(--rotate)+0.5deg);
      }
      a {
        font-size: 3rem;
        text-decoration: none;
        &:hover {
          color: var(--red);
        }
      }
    }
  }
`;

export default function Nav() {
  return(
    <NavStyles>
    <ul>
      <li><Link to="/">LOGO</Link></li>
      <li><Link to="/training/">Personal Training</Link></li>
      <li><Link to="/classes/">Classes</Link></li>
      <li><Link to="/membership/">Membership</Link></li>
      <li><Link to="/join/">Join Now</Link></li>
    </ul>
    </NavStyles>
  );
}