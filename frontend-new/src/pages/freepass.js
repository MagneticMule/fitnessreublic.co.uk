import { graphql, Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout.js';
import Header from '../components/Header.js';
import Container from '../styles/ContainerStyle';
import TextSection from '../components/TextSection.js';
import Image from '../components/widgets/Image.js';
import ReviewSection from '../components/ReviewSection.js';
import InfoBubble from '../components/InfoBubble.js';

const FreePassPage = ({data}) =>{

    return (
      <Layout>
        <Helmet
          title="Fitness Republic - Free Seven Day Pass"
          meta={[
            {
              name: 'description',
              content:
                'Trying out all out facilities including out state of the art gym and classes.',
            },
            {
              name: 'keywords',
              content:
                'leicester, personal training, ashby, ashby de la zouch, leicestershire, free pass, trial, weight loss, excercise, support, supportive, community, professional, near me',
            },
          ]}
        ></Helmet>
        <Header
          title={
            <>
              try us first with our <span>free pass</span>
            </>
          }
          subtitle={
            'expert guidance and motivation to support your fitness journey'
          }
        />
        <Container>
          <TextSection />
          <Image
            pic={data.file.childImageSharp.fluid}
            alt="Black and white picture of to men in a gym"
            blurb={
              'Simon explaining how to use a machine in the Fitness Republic gym to a client'
            }
          />
          <TextSection />
          <ReviewSection />
          <InfoBubble />
        </Container>
      </Layout>
    )
  }


export default FreePassPage;

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
