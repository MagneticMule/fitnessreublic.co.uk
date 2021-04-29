import { graphql, Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Container from '../styles/ContainerStyle';
import {DualSection} from '../styles/GridStyles';
import Header from '../components/Header'
import TextSection from '../components/TextSection';
import Image from '../components/widgets/Image';
import ReviewSection from '../components/ReviewSection';
import InfoBubble from '../components/InfoBubble';

const TeamPage = ({data}) =>{

    return (
      <Layout>
        <Helmet
          title="Fitness Republic - Personal Training"
          meta={[
            {
              name: 'description',
              content: '',
            },
            {
              name: 'keywords',
              content:
                'leicester, inclusive, personal training, ashby, ashby de la zouch, leicestershire, free pass, trial, weight loss, excercise, support, supportive, community, professional, near me',
            },
          ]}
        ></Helmet>
        <Header
          title={
            <>
              Our story. our team. <span>Your Gym</span>
            </>
          }
          subtitle={'how we got here, Who we are and why we do what we do'}
        />
        <Container>
          <DualSection>
            <TextSection
              title="How we started"
              subtitle="a mission to create a new kind of gym"
              body="We opened Fitness Republic in May 2010. Why? Well, we wanted to open a facility that  creating the most comfortable, fun, friendly and social place to workout and better yourself, both physically and mentally. We wanted a gym that felt more like a community than a place where you came in, lifted some weights then walked away.

              We are passionate about helping everyone reach their goals. Our team are a dedicated bunch of fitness and wellbeing professionals, here to guide and support you on your unique fitness journey."
            />
            <TextSection
              title="All work, all play"
              subtitle="From heavy lifters to ballroom dancers, our team is as diverse as it is passionate."
              body="Our expert team have a wealth of fitness, nutrition and wellbeing knowledge. we care and support everyone who walks through our door. We’re passionate about helping people meet their fitness and health goals."
            />
            <Image
              pic={data.team.childImageSharp.fluid}
              alt="Black and white group shot of our team in the gym"
              blurb={
                <>
                  <strong>Clockwise from top left:</strong> Sarah, Marcus, Ben,
                  Jacqui, Blanka, Connor and Simon
                </>
              }
            />
            <TextSection pos="3/5"
            body={<>Over the last 10 years we have went from </>}/>
            <ReviewSection />
            <InfoBubble />
          </DualSection>
        </Container>
      </Layout>
    )
  }


export default TeamPage;

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
        fixed(height: 152, width: 152) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    team: file(relativePath: { eq: "team-group-bw.jpg" }) {
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
