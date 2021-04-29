import React from 'react';
import styled, { withTheme } from 'styled-components';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAddressCard,
  FaPhoneSquareAlt,
} from 'react-icons/fa';



const Background = styled.div`
  background: var(--dark-grad);
  color: var(--white);
  font-weight: 500;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1em 4em;
  max-width: 1600px;

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

const MiniNav = props => {
return (
  <Background>
    <Container>
      <ul>
        <li>
          We are open until <strong>9.00PM </strong>today
        </li>
        <li>
          <FaPhoneSquareAlt />
          <a href="tel:+4401530413330"> 01530 413330</a>
        </li>
      </ul>
    </Container>
  </Background>
)
}

export default MiniNav;