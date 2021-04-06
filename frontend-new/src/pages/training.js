import { graphql, Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout.js';
import DualSection from '../styles/GridStyles.js';
import Header from '../components/Header.js';
import Container from '../styles/ContainerStyle';
import TextSection from '../components/TextSection.js';
import Image from '../components/widgets/Image.js';
import ReviewSection from '../components/ReviewSection.js';
import InfoBubble from '../components/InfoBubble.js';
import TextCta from '../components/widgets/TextCta.js';

const TrainingPage = ({data}) =>{
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
        <Header
          title={
            <>
              Your own <span>Personal Trainer</span>
            </>
          }
          subtitle={
            'expert guidance and motivation to support your fitness journey'
          }
        />

        <Container>
          <DualSection>
            <TextSection />
            <Image
              pic={data.illustration1.childImageSharp.fluid}
              alt="Black and white picture of to men in a gym"
              blurb={
                'Simon explaining how to use a machine in the Fitness Republic gym to a client'
              }
            />


  <ReviewSection
              location={'content'}
              headshot={data.headshot1.childImageSharp.fixed}
              reviewtext={
                <>
                  I started with Blanka in January 2021. Her approach to our
                  personal training sessions are both <strong>creative</strong>{' '}
                  and <strong>personable</strong>. No two sessions are the same.
                  I now look forward to exercise and have achieved significant
                  results. Long may this journey with her continue.
                </>
              }
            />

            <InfoBubble location={'content'} />
          </DualSection>
        </Container>
      </Layout>
    )
  }


export default TrainingPage;

export const query = graphql`
        query {
           headshot1: file(relativePath: { eq: "headshots/katy.jpg" }) {
             childImageSharp {
               fixed(height: 100, width: 100) {
                 ...GatsbyImageSharpFixed
               }
             }
           },

           illustration1: file(relativePath: { eq: "simon-with-client.jpg" }) {
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
