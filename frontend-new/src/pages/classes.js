import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import TextSection from "../components/TextSection";
import Image from "../components/widgets/Image";
import Pullquote from "../components/widgets/text/Pullquote";
import Button from "../components/widgets/Button";
import SuperBullet from "../components/widgets/text/SuperBullet";
import ReviewSection from "../components/ReviewSection";
import InfoBubble from "../components/InfoBubble";
import IntroText from "../components/widgets/text/IntroText";
import MembershipSection from "../components/MembershipSection";

import FormSevenDayPass from "../components/FormSevenDayPass";

const Index = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="Fitness Republic - Fitness Classes delivered in the gym and onine"
        meta={[
          {
            name: "description",
            content:
              "We offer gym based and online classes in Zumba, HIIT, Core, Yoga, Ballet Be Fit, Cambat HIIT, Pilates, Stretch and Relax, Zumba Toning and more."
          },
          {
            name: "keywords",
            content:
              "gym, fitness, personal training, ashby, ashby de la zouch, leicestershire, free pass, student membership, local, near me"
          }
        ]}
      >
        <script src="https://fitnessrepublic.clubright.co.uk/js/calendar.js"></script>
        <script type="application/ldon">
          {`
            {
              @context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.fitnessrepublic.co.uk",
              "name": "Fitness Republic",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "01530 413330",
                "contactType": "Enquiries"
              }
            }
            `}
        </script>
      </Helmet>
      <Header
        title={
          <>
            Fintess Classes <span>For Everyone</span>
          </>
        }
        subtitle={"Group fitness training delivered both in-gym and online"}
      />
      <Container>
        <DualSection>
          <div>
            <Pullquote
              body="Fitness classes are an ideal way to add structure, fun and motivation to your fitness plan"
              attribution={
                <>
                  <strong>Simon Pellechia</strong> // Director and Personal
                  Trainer
                </>
              }
            />
            {/* <Button title="Book a visit" /> */}
          </div>
          <TextSection
            title="Let's Get Started"
            subtitle="From AB's through Core to Zumba"
            body="One of the great things about group classes is that they provide a community that help keeps you motovated to reach your fitness goals. Our class schedule includes an incredible range of activities to suit any fitness level."
          />

          <Image
            pic={data.timetable.childImageSharp.fluid}
            alt="Our fitness class timetable."
            blurb={
              "This weeks timetable. You can save it off, print it and stick it on the front of your fridge"
            }
          />

          <TextSection
            title="Our Classes"
            subtitle="As diverse as they are effective"
            body={
              <>
                <ul>
                  <li>
                    <strong>Abs and Core:</strong> Plenty of Ab’s work here!
                    Focus is on the midsection, including glutes and lower back
                    muscles.
                  </li>
                  <hr />
                  <li>
                    <strong>Ballet Be Fit:</strong> Based on the principles of
                    classical ballet, incorporating strength training & building
                    flexibility and posture.{" "}
                    <strong>
                      <i>Open to all levels and abilities.</i>
                    </strong>
                  </li>
                  <hr />
                  <li>
                    <strong>Box HIIT:</strong> A high Intensity workout that
                    features boxing and bodyweight drills. Lots of sweaty work
                    here, fat burning and fitness driven!.
                  </li>
                  <hr />
                  <li>
                    <strong>Combat HIIT:</strong> A High intensity workout
                    featuring punching, kicking and bodyweight drills to get the
                    heart pumping! A great fun, fat burning and fitness workout.{" "}
                  </li>
                  <hr />
                  <li>
                    <strong>Core:</strong> A class focued on building the core
                    muscle groups while improving posture through performing a
                    variety of exercises that strengthen the abdomen and back ,
                    plus increase flexibility.
                  </li>
                  <hr />
                  <li>
                    <strong>HIIT:</strong> A High Intensity bodyweight workout,
                    involving repeated bouts of high intensity, followed by
                    various recovery times. A tough Fat Burning Workout!
                  </li>
                  <hr />
                  <li>
                    <strong>Glute Shred:</strong> A fun workout focusing on the
                    glutes and quads. Shape and sculpt those bums!!
                  </li>
                  <hr />
                  <li>
                    <strong>Zumba:</strong> Combines Latin and international
                    music with dance moves. Zumba routines incorporate interval
                    training alternating fast and slow rhythms to help improve
                    cardiovascular fitness. Seriously fun!
                  </li>
                  <hr />
                  <li>
                    <strong>Zumba:</strong> Combines targeted body-sculpting
                    exercises and high-energy cardio work with Latin-infused
                    ZUMBA® moves to create a calorie-torching, strength-
                    training dance fitness-party.
                  </li>
                </ul>
              </>
            }
          />
          <Image
            pic={data.fitnessclass1.childImageSharp.fluid}
            alt="A black and white image of one of our fitness classes. A group of women hold barbells with small weights over their shoulder."
            blurb={"One of our fitness classes taking place in our studio."}
          />

          <TextSection
            title="Booking a class"
            subtitle="From AB's through Core to Zumba"
            body="One of the great things about group classes is that they provide a community that help keeps you motovated to reach your fitness goals. Our class schedule includes an incredible range of activities to suit any fitness level."
          />
        </DualSection>
      </Container>
    </Layout>
  );
};

export default Index;

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

    timetable: file(relativePath: { eq: "classtimetable.jpg" }) {
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

    fitnessclass1: file(relativePath: { eq: "fitness-class-1.jpg" }) {
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
