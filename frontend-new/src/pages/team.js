import { graphql, Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Container from "../styles/ContainerStyle";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import TextSection from "../components/TextSection";
import Image from "../components/widgets/Image";
import ReviewSection from "../components/ReviewSection";
import InfoBubble from "../components/InfoBubble";

import ImageGallery from "../components/ImageGallery";

const TeamPage = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="Fitness Republic - All about us"
        meta={[
          {
            name: "description",
            content:
              "At Fitness Republic, we are passionate about helping everyone reach their goals. Our team are a dedicated bunch of fitness and wellbeing professionals, here to guide and support you on your unique fitness journey."
          },
          {
            name: "keywords",
            content:
              "leicester, inclusive, personal training, ashby, ashby de la zouch, market street, leicestershire, free pass, trial, weight loss, excercise, support, supportive, community, professional, weight, near me, lose weight,get fit"
          }
        ]}
      ></Helmet>
      <Header
        title={
          <>
            Our story. our team. <span>Your Gym</span>
          </>
        }
        subtitle={"how we got here, Who we are and why we do what we do"}
      />
      <Container>
        <DualSection>
          <TextSection
            title="How we started"
            subtitle="a mission to create a new kind of gym"
            body="We opened Fitness Republic in May 2010. Why? Well, we wanted to open a facility that  fostered the most comfortable, fun, friendly and social environment to train physically and relax mentally. We wanted a gym that felt more like a community than a place to simply 'work out' where you came in, lifted some weights then walked away.

              Creating a facility that encompassed all of our passions about keeping fit & healthy was always going to be a tough nut to crack. With so many facilities out there, we wanted to be different. We wanted to bring you the most comfortable, family friendly facility that wasn’t only just about training, but about lifestyle, wellbeing, friends and the social side of working out.

              At Fitness Republic, we are passionate about helping everyone reach their goals. Our team are a dedicated bunch of fitness and wellbeing professionals, here to guide and support you on your unique fitness journey."
          />
          <TextSection
            title="All work, all play"
            subtitle="From heavy lifters to ballroom dancers, our team is as diverse as it is passionate."
            body="Our expert team have a wealth of fitness, nutrition and wellbeing knowledge. we care and support everyone who walks through our door. We’re passionate about helping people meet their fitness and health goals. Our team of experts are both highly experienced and highly passionate about the support we give you throughout your fitness journey.
            "
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
          <TextSection
            pos="3/5"
            body={
              <>
                No matter what level you are starting from. An absolute beginner
                who’s never entered a gym before, or someone who has not
                attended the gym for a long while, all the way to a very
                experienced, and a dedicated gym user - we can help. We can
                design you a plan for your specific needs. Losing weight,
                getting fitter, muscle building or just to keep moving, we have
                the equipment and the know-how. All of our programs are
                included, and our ongoing support is something we are very proud
                of. We have taken love and care to provide an environment that
                will make it so much more fun to exercise, with lots and lots of
                natural light, a small outside area for outdoor training and a
                small intimate class studio for our ever-expanding class
                timetable. Very clean and with Covid safe procedures firmly in
                place, we can’t wait to meet you!{" "}
              </>
            }
          />
          <ImageGallery
            pic1={data.simontreadmill.childImageSharp.fluid}
            pic2={data.jacquibench.childImageSharp.fluid}
            pic3={data.marcusdumbells.childImageSharp.fluid}
          />
          {/* <ReviewSection /> */}
          {/* <InfoBubble /> */}
        </DualSection>
      </Container>
    </Layout>
  );
};

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

           simontreadmill: file(
             relativePath: { eq: "staff/simon-treadmill.jpg" }
           ) {
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
           jacquibench: file(
             relativePath: { eq: "staff/jacqui-bench.jpg" }
           ) {
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
           marcusdumbells: file(
             relativePath: { eq: "staff/marcus-dumbells.jpg" }
           ) {
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
