import React from 'react';
import styled from 'styled-components';
import Container from '../styles/ContainerStyle';
import Button from "./widgets/Button";

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

const CovidButton = styled.li`
  background: var(--orange);
  padding: .6em 1em;
  border-radius:16px;
`;

const Items = styled.div`


  ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
  }

  li {
    padding: 0.6em 0;
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
      <Items>
        <ul>
          <li>
            We are open until <strong>9.00PM </strong>today
          </li>
          <li>
            <FaPhoneSquareAlt />
            <a href="tel:+4401530413330"> 01530 413330</a>
          </li>
        </ul>
      </Items>
    </Container>
  </Background>
);
}

export default MiniNav;