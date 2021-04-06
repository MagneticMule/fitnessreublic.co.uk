import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';


const Cta = styled.aside`
  display: flex;

`;
const IntroText = styled.p`


`;

const TextCta = (props) => {

  return (
    <Cta>
      <IntroText>{props.introtext}</IntroText>
      <Link to="{props.link}">{props.linktext}</Link>
    </Cta>
  )
}

export default TextCta;