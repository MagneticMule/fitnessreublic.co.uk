import React from 'react'
import styled, { withTheme } from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';



const Dual = styled.section`
  margin: 6em 0;
  display: flex;
  grid-gap: 2em;
`;

const TextContent = styled.div`
  padding: 0;
  margin:0;
  grid-area: content;
`

const Background = styled.div`
  background: var(--dark-grad);
`



const Subtitle = styled.h3`
  margin: 0;
  color: var(--orange);
  letter-spacing: -1px;
  font-weight: 300;
  text-transform: capitalize;
  color: var(--orange);
`;

const IntroText = styled.div`
  font-size: 2rem;
  letter-spacing: -1px;
  color: var(--orange);
  font-style: italic;
  margin: 0 0 2em 0;
  line-height: 1.5;
`;

const BodyText = styled.div`
  font-size: 1.2rem;
  margin: 1.2em 0 2em 0;
`;



const ReviewSection = () => {
return (
  <section>
  <Background>
    <Dual>
      Review
    </Dual>
    </Background>
  </section>
);

}

export default ReviewSection;