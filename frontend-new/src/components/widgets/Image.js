import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';


const PicContainer = styled.div`
  grid-column: 1/7;
  `;

const ImageContainer = styled.div`

  `;

const Blurb = styled.p`
color: var(--dark-grey);
  font-style:italic;
  > strong {
    font-weight:bold;
  }
`;


const Image = (props) => {
return (
  <PicContainer>
    <ImageContainer>
      <Img
        fluid={props.pic}
        alt={props.alt}
      />
    </ImageContainer>
    <Blurb>
      {props.blurb}
    </Blurb>
  </PicContainer>
)
}

export default Image;