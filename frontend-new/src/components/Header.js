import React from 'react'
import styled from 'styled-components'

import Container from '../styles/ContainerStyle.js';
import Menu from './Menu.js';

const Head = styled.head`
  display: grid;
  min-height: min(40vh, 800px);
  background: linear-gradient(
      262.04deg,
      rgba(255, 107, 0, 0.2) 48.53%,
      rgba(255, 255, 255, 0) 99.73%
    ),
    linear-gradient(
      98deg,
      rgba(0, 13, 129, 0.2) 0.9%,
      rgba(255, 255, 255, 0) 56.29%
    ),
    #f0e1e1;
  box-shadow: inset 0px -4px 16px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`

  background: linear-gradient(
      262.16deg,
      rgba(255, 107, 0, 0.8) 0.74%,
      rgba(255, 255, 255, .1) 99.73%
    ),
    linear-gradient(
      98deg,
      rgba(0, 13, 129, 0.5) 0%,
      rgba(255, 255, 255, .2) 99.66%
    ),
    linear-gradient(0deg, #410e23, #410e23);

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  text-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25) inset;
  font-size: 4.209rem;
  color: #770264;
  letter-spacing: -0.05em;
  text-transform: capitalize;
  margin: 0;

  span {
    font-weight: 900;
  }
`;

const Subtitle = styled.p`
  width: fit-content;
  background: linear-gradient(
    110deg,
    rgba(120, 60, 0, 1) 0%,
    rgba(134, 37, 158, 1) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
`;

const TextSection = (props) => {
  return (
    <Head>
      <Menu />
      <Container>
        <Title>
          {props.title}
        </Title>
        <Subtitle>
          {props.subtitle}
        </Subtitle>
      </Container>
    </Head>
  )
}

export default TextSection
