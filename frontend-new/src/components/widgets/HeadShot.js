import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'




const ImageContainer = styled.div`
  background: var(--deep-purple);
  height: 100px;
  width: 100px;
  margin: 0 2em 3em 0;
  border-radius: 50%;
  overflow: hidden;
  border: 16px solid var(--semi-transparent-orange);
  box-shadow:
    0px 0px 0px 16px rgba(200, 100, 100, 0.5),
    32px 32px 32px 32px rgba(0, 0, 0, 0.4);
  align-self: center;
`;


const HeadShot = (props) => {

  return (
      <ImageContainer>
        <Img
          fixed={props.headshot}
          alt="{props.name}'s headshot"
        />
      </ImageContainer>

  )
}



export default HeadShot;
