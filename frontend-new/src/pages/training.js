import { graphql, Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import {DualSection} from '../styles/GridStyles';
import Header from '../components/Header.js';
import Container from '../styles/ContainerStyle';
import TextSection from '../components/TextSection';
import TrainingSection from "../components/TrainingSection";
import Image from '../components/widgets/Image';
import ReviewSection from '../components/ReviewSection';
import InfoBubble from '../components/InfoBubble';
import TextCta from '../components/widgets/TextCta';
import IntroText from '../components/widgets/text/IntroText';
import FormGeneral from '../components/FormGeneral';

const TrainingPage = ({data}) =>{
    return (
      <Layout>
        <Helmet
          title="Fitness Republic - Personal Training"
          meta={[
            {
              name: "description",
              content:
                "Working with a personal trainer here at fitness republic could be the perfect way to kickstart your fitness journey."
            },
            {
              name: "keywords",
              content:
                "leicester, personal training, ashby, ashby de la zouch, leicestershire, free pass, trial, weight loss, excercise, support, supportive, community, professional, near me"
            }
          ]}
        ></Helmet>
        <Header
          title={
            <>
              Your own <span>Personal Trainer</span>
            </>
          }
          subtitle={
            "expert guidance and motivation to support your fitness journey"
          }
        />

        <Container>
          <DualSection>
            <InfoBubble
              location={"content"}
              headshot={data.blankahead.childImageSharp.fixed}
              name={"Blanka"}
            />
            <TextSection
              pos="2/-1"
              title="What is Personal Training?"
              subtitle="A basic overview of what we do"
              body="Here at Fitness Republic looking after our clients is our number one priority. With Personal Training we take this one stage further. One to One focus and attention on every session to bring out the very best in You. Accountability to keep you committed and consistent, whilst helping you to squeeze every last rep out, helping you achieve your goals faster and more efficiently. All of our trainers are distinguished by their ability to practice what they preach."
            />

            <TextSection
              pos="2/-1"
              title="Who is personal training for?"
              subtitle="The Short answer is anyone but there are exceptions"
              body="Everyone can hugely benefit from personal training, whether you are an absolute beginner, have limited gym experience or an experienced gym goer. We will tailor your plan to your specific ability and goals. Don’t worry if you’re not sure it for you, or if you have any medical issues holding you back, please talk to us as we can help to improve so much of your lifestyle and training in only a short space of time. "
            />
            <Image
              pic={data.simonclient.childImageSharp.fluid}
              alt="Black and white picture of to men in a gym"
              blurb={
                "Simon explaining how to use a machine in the Fitness Republic gym to a client"
              }
            />

            <TextSection
              title="What can you expect?"
              pos="2/5"
              subtitle="Your ambitions and commitment play a key role"
              body="Personal Training gives you full accountability. We will require full commitment to your workouts and nutrition. We will guide you through tough training sessions designed to get the very best out of you, show you how maximise your exercise technique and performance, pushing you further than you dream possible. We will guide you through your nutrition, advising you on how to eat for optimum performance and results, whether it be to slim down or build up. We leave nothing to chance! It’s not going to be easy, but we promise to deliver!"
            />

            <TextSection
              pos="2/5"
              subtitle="We work directly with a physiotherapist"
              body="At our facility in Ashby de la Zouch we have an in house physiotherapist with over 20 years of experience. Craig is on hand to help with any injuries or problems you may have. Craig is also an active runner and performs running assessments held at the gym. All of our coaches work with Craig helping us to help you even more!"
            />
            <TextSection
              pos="2/5"
              subtitle="Everybody is different"
              body="We know that everybody has different levels of fitness, flexibility, balance, strength, agility and motor skills. Many of our clients come to us with injuries and we have the knowledge and skills to work with them to continue training, rehabilitate and make consistent progress. All our coaches have been educated in nutrition for fitness and sport, we also have a dedicated nutritionist on hand to answer questions or create a nutrition plan to compliment your training."
            />
            <TextSection
              pos="2/5"
              subtitle="It takes commitment and time to form good habits"
              body="Habits can make you or break you. In order to change you must change certain things you do daily. Most of the time we don’t even realise the habits we have that are having a detrimental effect on our bodies and mind. Our Personal Coaches should keep you accountable. Ensuring you turn up and give it your all, every session. What you think is achievable and where you think your limitations are, is just the beginning."
            />
            <TrainingSection
              title="Personal Training Plans"
              subtitle="Kickstart your training with one of these options"
              trainings={[
                {
                  key: 1,
                  title: (
                    <>
                      Solid Impact <span>6 week Plan</span>
                    </>
                  ),
                  price: (
                    <>
                      <span>£37.50</span> Per week for 6 weeks
                    </>
                  ),
                  description: (
                    <>
                      <b>Haven't been in the gym for a while?</b> Become
                      familiar with excercising safely and gaining a solid
                      understanding of the relationship between excercise and
                      diet.
                    </>
                  ),
                  paymethod: "Payable once per month via Direct Debit",
                  bullets: [
                    "One PT session Per Week",
                    "Diet advice and support",
                    "Personalized Fitness Plan"
                  ],
                  totalcost: "£225"
                },
                {
                  key: 2,
                  title: (
                    <>
                      Solid Impact <span>6 week Plan</span>
                    </>
                  ),
                  price: (
                    <>
                      <span>£60.00</span> Per week for 8 weeks
                    </>
                  ),
                  description: (
                    <>
                      Looking to bulk up or slim down for an event? Perhaps you
                      want to hit the ground running after a period of
                      inactivity? This plan will help you achieve realistic and
                      manitanable results.
                    </>
                  ),
                  paymethod:
                    "Payable via Card or Cash in two installments of £240",
                  bullets: [
                    "Two PT sessions Per Week",
                    "Diet advice and support",
                    "Personalized Fitness Plan"
                  ],
                  totalcost: "£480"
                },
                {
                  key: 3,
                  title: (
                    <>
                      Maximum Impact <span>12 week Plan</span>
                    </>
                  ),
                  price: (
                    <>
                      <span>£66.00</span> Per week for 12 weeks
                    </>
                  ),
                  description: (
                    <>
                      Looking to build good habits over time and achieve your
                      health goals in a structured and manageable timeframe?
                    </>
                  ),
                  paymethod:
                    "Payable via Card or Cash in four installments of £200",
                  bullets: [
                    "One PT session Per Week",
                    "Diet advice and support",
                    "Personalized Fitness Plan"
                  ],
                  totalcost: "£800"
                }
              ]}
            />
            <IntroText text="Have a question about personal training? Let's start the conversation." />
            <FormGeneral id="frm-training" name="Seven Day Pass" />
          </DualSection>
        </Container>
      </Layout>
    );
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
