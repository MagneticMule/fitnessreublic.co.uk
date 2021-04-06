import React from 'react'
import styled, { withTheme } from 'styled-components'

import HeadShot from './widgets/HeadShot.js';



const ReviewConatiner = styled.section`
  border-radius: 8px;
  background: var(--dark-grad);
  padding: 6em;
  display: flex;
  grid-gap: 2em;
  align-items: center;
  grid-gap: 10%;
  grid-column: 1/7;
`;




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

const Review = styled.div`
  width:45%;
  display: flex;
  flex-direction:column;
  color: var(--white);
  padding: 0;
  margin: 0;
  grid-area: content;
`;

const ReviewText = styled.div`
  font-size: 1.4rem;
  hyphens: auto;

  &::before {
    color: var(--orange);
    font-weight: 900;
    content: open-quote;
    padding-right: 0.2rem;
    margin-left: -0.7rem;
  }

  &::after {
    color: var(--orange);
    font-weight: 900;
    content: close-quote;
    margin-left: 0.2rem;
  }
`

const ReviewerName = styled.p`
  font-size: 1rem;
  font-weight: 900;
  > span {
    font-style: italic;
    font-style: normal;
    font-weight: 100;
  }
`


const CallToAction = styled.div`
  color:white;
  text-align:right;
  width: 45%;
  flex: 1;
`;


const ReviewSection = (props) => {
return (
  <ReviewConatiner>
        <Review>
          <HeadShot name={'katy'} headshot={props.headshot}/>
          <ReviewText>
            {props.reviewtext}
          </ReviewText>
          <ReviewerName>
            Kathy <span><i>via</i> Instagram</span>
          </ReviewerName>
        </Review>
        <CallToAction>And here goes the CTA</CallToAction>
  </ReviewConatiner>
)

}

export default ReviewSection;