import React from 'react';
import styled from 'styled-components';

const TextContent = styled.div`
  grid-column: ${props => (props.pos ? props.pos : '2/5')};
`;

const Background = styled.div`
  background-color:var(--white);
`;

const SectionTitle = styled.h2`
  margin: -1rem 0 0 0;
  font-size: 4.209rem;
  font-weight: 300;
  letter-spacing: -0.05em;
  text-transform: capitalize;
  color: var(--deeper-purple);
`;

const SubTitle = styled.h3`
  margin: 0;
  padding:0;
  color: var(--orange);
  letter-spacing: -1px;
  font-weight: 300;
  text-transform: capitalize;
  color: var(--orange);
`;

const BodyText = styled.div`
  font-size: 1.2rem;
  margin: 1.2em 0 2em 0;
`;

const BackStripe = styled.div`
  & {
    position: relative;
    overflow: hidden;
  }

  &:before {
    z-index: -1;
    content: ' ';
    background: var(--lightsripe-grad);
    position: absolute;
    top: -200%;
    right: 0;
    left: -100%;
    bottom: 0;
    transform: skewY(-66deg);
  }

`;

const SideBar = styled.div`
 > p {
   color: var(--dark-grey);
 }
`;

const TextSection = (props) => {
return (
  <TextContent pos={props.pos}>
    <SectionTitle>{props.title}</SectionTitle>
    <SubTitle>{props.subtitle}</SubTitle>
    <BodyText>{props.body}</BodyText>
  </TextContent>
)
}

export default TextSection;