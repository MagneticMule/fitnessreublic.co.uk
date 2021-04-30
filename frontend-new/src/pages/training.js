import { graphql, Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import {DualSection} from '../styles/GridStyles';
import Header from '../components/Header.js';
import Container from '../styles/ContainerStyle';
import TextSection from '../components/TextSection';
import Image from '../components/widgets/Image';
import ReviewSection from '../components/ReviewSection';
import InfoBubble from '../components/InfoBubble';
import TextCta from '../components/widgets/TextCta';
import IntroText from '../components/widgets/text/IntroText';

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
            <InfoBubble
              location={'content'}
              headshot={data.blankahead.childImageSharp.fixed}
              name={'Blanka'}
            />

            <TextSection
              title="What is Personal Training?"
              subtitle="A basic overview of what we do"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam eaque dolores reprehenderit, quaerat suscipit debitis
              labore explicabo recusandae expedita quidem velit quos hic maxime,
              eius molestias ab, quia nulla? Consequuntur! Accusamus sint alias
              odio"
            />

            <TextSection
              title="Who is personal training for?"
              subtitle="The Short answer is anyone but there are exceptions"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam eaque dolores reprehenderit, quaerat suscipit debitis
              labore explicabo recusandae expedita quidem velit quos hic maxime,
              eius molestias ab, quia nulla? Consequuntur! Accusamus sint alias
              odio"
            />

            <TextSection
              title="What can you expect?"
              subtitle="Your ambitions and commitment play a key role"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam eaque dolores reprehenderit, quaerat suscipit debitis
              labore explicabo recusandae expedita quidem velit quos hic maxime,
              eius molestias ab, quia nulla? Consequuntur! Accusamus sint alias
              odio eligendi necessitatibus consequatur unde ratione excepturi.
              Blanditiis recusandae nostrum in iste modi corporis ipsum
              excepturi aliquam, ratione accusamus ut voluptate eum porro
              repellat ipsa veniam ipsam. Harum numquam sunt fugiat ipsa
              suscipit alias tenetur eaque deserunt reprehenderit itaque.
              Corrupti distinctio sint, officia consequatur ullam assumenda fuga
              modi numquam molestias molestiae eum ad, nobis voluptate delectus
              temporibus!"
            />

            <Image
              pic={data.simonclient.childImageSharp.fluid}
              alt="Black and white picture of to men in a gym"
              blurb={
                'Simon explaining how to use a machine in the Fitness Republic gym to a client'
              }
            />

            <TextSection
              pos="2/5"
              subtitle="Your ambitions and commitment play a key role"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam eaque dolores reprehenderit, quaerat suscipit debitis
              labore explicabo recusandae expedita quidem velit quos hic maxime,
              eius molestias ab, quia nulla? Consequuntur! Accusamus sint alias
              odio eligendi necessitatibus consequatur unde ratione excepturi.
              Blanditiis recusandae nostrum in iste modi corporis ipsum
              excepturi aliquam, ratione accusamus ut voluptate eum porro
              repellat ipsa veniam ipsam. Harum numquam sunt fugiat ipsa
              suscipit alias tenetur eaque deserunt reprehenderit itaque.
              Corrupti distinctio sint, officia consequatur ullam assumenda fuga
              modi numquam molestias molestiae eum ad, nobis voluptate delectus
              temporibus!"
            />
            <TextSection
              pos="2/5"
              title="What can you expect?"
              subtitle="Your ambitions and commitment play a key role"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam eaque dolores reprehenderit, quaerat suscipit debitis
              labore explicabo recusandae expedita quidem velit quos hic maxime,
              eius molestias ab, quia nulla? Consequuntur! Accusamus sint alias
              odio eligendi necessitatibus consequatur unde ratione excepturi.
              Blanditiis recusandae nostrum in iste modi corporis ipsum
              excepturi aliquam, ratione accusamus ut voluptate eum porro
              repellat ipsa veniam ipsam. Harum numquam sunt fugiat ipsa
              suscipit alias tenetur eaque deserunt reprehenderit itaque.
              Corrupti distinctio sint, officia consequatur ullam assumenda fuga
              modi numquam molestias molestiae eum ad, nobis voluptate delectus
              temporibus!"
            />
            <TextSection
              title="What can you expect?"
              subtitle="Your ambitions and commitment play a key role"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam eaque dolores reprehenderit, quaerat suscipit debitis
              labore explicabo recusandae expedita quidem velit quos hic maxime,
              eius molestias ab, quia nulla? Consequuntur! Accusamus sint alias
              odio eligendi necessitatibus consequatur unde ratione excepturi.
              Blanditiis recusandae nostrum in iste modi corporis ipsum
              excepturi aliquam, ratione accusamus ut voluptate eum porro
              repellat ipsa veniam ipsam. Harum numquam sunt fugiat ipsa
              suscipit alias tenetur eaque deserunt reprehenderit itaque.
              Corrupti distinctio sint, officia consequatur ullam assumenda fuga
              modi numquam molestias molestiae eum ad, nobis voluptate delectus
              temporibus!"
            />
          </DualSection>
        </Container>
      </Layout>
    )
  }


export default TrainingPage;

export const query = graphql`
         query {
           kathyhead: file(relativePath: { eq: "headshots/katy.jpg" }) {
             childImageSharp {
               fixed(height: 100, width: 100) {
                 ...GatsbyImageSharpFixed
               }
             }
           }
           blankahead: file(relativePath: { eq: "headshots/blanka.jpg" }) {
             childImageSharp {
               fixed(height:152, width: 152) {
                 ...GatsbyImageSharpFixed
               }
             }
           }

           simonclient: file(relativePath: { eq: "simon-with-client.jpg" }) {
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
