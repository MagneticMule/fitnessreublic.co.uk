import { Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout.js';
import Container from '../styles/ContainerStyle';
import TextSection from '../components/TextSection.js';
import Image from '../components/widgets/Image.js';
import ReviewSection from '../components/ReviewSection.js';

const TrainingPage = () =>{
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
          <Image />
          <TextSection />
          <ReviewSection />
        </Container>
      </Layout>
    )
  }


export default TrainingPage;

