import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';


const PicContainer = styled.div`

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


const Image = () => {
    const data = useStaticQuery(graphql`
    query {
    file(relativePath: { eq: "simon-with-client.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);
return (
  <PicContainer>
    <ImageContainer>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Simon explaining how to use a machine in the gym to a client"
      />
    </ImageContainer>
    <Blurb>
      Simon explaining how to use a machine in the <strong>Fitness Republic</strong> gym to a client
    </Blurb>
  </PicContainer>
)
}

export default Image;