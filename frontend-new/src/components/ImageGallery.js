import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";


const SingleImage = props =>{

  return(<>Image File</>);
}


const Container = styled.section`
  grid-column: ${props => (props.pos ? props.pos : "1/-1")};
  display: grid;
  margin: 4em 0;
  /* grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)); */
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
   .image {
     border-radius: 2em;
    padding: 1em;
    border: .2em solid blue;
    min-height:300px;
  }

   .image:nth-of-type(3n) {
    border: .2em solid red;
    grid-column: 1/-1;
  }
`;


const ImageGallery = props => {
  console.log({props});
  return (
    <Container>
      <div className="image">image</div>
      <div className="image">image</div>
      <div className="image">image</div>
      <div className="image">image</div>
      <div className="image">image</div>
    </Container>
  );
}


export default ImageGallery;