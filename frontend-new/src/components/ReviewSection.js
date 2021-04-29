import React from 'react'
import styled, { withTheme } from 'styled-components'

import Img from 'gatsby-image';



const ReviewContainer = styled.section`
  flex-direction:row;
  border-radius: 8px;
  background: var(--dark-grad);
  padding: 6em;
  display: flex;
  grid-gap: 2em;
  margin-bottom:6em;
  align-items: center;
  grid-gap: 10%;
  grid-column: 1/5;
`;

const ReviewBackground = styled.div`
  background: rgba(255, 255, 255, 0.1);
  background: red;
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
  max-width: 45%;
  display: flex;
  flex-direction: column;
  color: var(--white);
  padding: 0;
  margin: 0;
  grid-area: content;

  > .headshot {
    background: var(--deep-purple);
    height: 100px;
    width: 100px;
    margin: 0 2em 3em 0;
    border-radius: 50%;
    overflow: hidden;
    border: 16px solid var(--semi-transparent-orange);
    box-shadow: var(--close-shadow);
    align-self: center;
  }
`;


const ReviewText = styled.div`
  font-size: 1.2rem;
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
`;

const ReviewerName = styled.p`
  font-size: 1rem;
  font-weight: 900;
  > span {
    font-style: italic;
    font-style: normal;
    font-weight: 100;
  }
`;


const CallToAction = styled.div`
  max-width: 45%;
  color:white;
  text-align:right;
  width: 45%;
  flex: 1;
`;


const ReviewSection = props => {
return (
  <ReviewContainer>
    <Review>
      <Img
        className="headshot"
        fixed={props.headshot}
        alt="{props.name}'s headshot"
      />
      <ReviewText>{props.reviewtext}</ReviewText>
      <ReviewerName>
        Kathy{" "}
        <span>
          <i>via</i> Instagram
        </span>
      </ReviewerName>
    </Review>
    <Review>
      <Img
        className="headshot"
        fixed={props.headshot}
        alt="{props.name}'s headshot"
      />
      <ReviewText>{props.reviewtext}</ReviewText>
      <ReviewerName>
        Kathy{" "}
        <span>
          <i>via</i> Instagram
        </span>
      </ReviewerName>
    </Review>
  </ReviewContainer>
);

}

export default ReviewSection;