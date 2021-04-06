import { graphql, Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout.js';
import Container from '../styles/ContainerStyle';
import TextSection from '../components/TextSection.js';
import Image from '../components/widgets/Image.js';
import ReviewSection from '../components/ReviewSection.js';
import InfoBubble from '../components/InfoBubble.js';

const TrainingPage = ({data}) =>{
  console.log(data.file);
    return (
      <Layout>
        <Helmet
          title="Fitness Republic - Personal Training"
          meta={[
            {
              name: 'description',
              content:
                'Working with a personal trainer here at fitness republic could be the perfect way to kickstart your fitness journey.',
            },
            {
              name: 'keywords',
              content:
                'leicester, personal training, ashby, ashby de la zouch, leicestershire, free pass, trial, weight loss, excercise, support, supportive, community, professional, near me',
            },
          ]}
        ></Helmet>
        <Container>
          <TextSection />
          <Image pic={data.file.childImageSharp.fluid} alt="Black and white picture of to men in a gym" blurb={"Simon explaining how to use a machine in the Fitness Republic gym to a client"}/>
          <TextSection />
          <ReviewSection />
          <InfoBubble />
        </Container>
      </Layout>
    )
  }


export default TrainingPage;

export const query = graphql`
  query {
    file: file(relativePath: { eq: "simon-with-client.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
