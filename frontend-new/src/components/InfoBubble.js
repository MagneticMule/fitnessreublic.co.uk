import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import HeadShot from './widgets/HeadShot.js';

const Bubble = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  border-radius: 48px;
  background: var(--lin-grad-smooth-orange);
  color: var(--deep-wine);
  font-size: 1.2rem;
  padding: 3em;
  max-width: 480px;
  grid-column: 2/4;
`;


const InfoBubble = () => {
  return (
    <Bubble>
      Working with a personal instructor is the perfect kickstart to your
      fitness journey. For me personally, it provided a structured and
      personalized plan of action to loose my maternity weight before
      progressing on my own.
      <br/>
      <Link aria-label="Contact Blanka" to="/membership/">
        Contact Blanka About Personal Training
      </Link>
    </Bubble>
  )
}


export default InfoBubble;