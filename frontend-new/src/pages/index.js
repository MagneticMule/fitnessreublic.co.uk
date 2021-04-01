import { Link } from 'gatsby'
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout.js';

import Container from '../styles/ContainerStyle.js';
import TextSection from '../components/TextSection.js';
import Image from '../components/widgets/Image.js';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Fitness Republic - Family Gym in Ashby"
          meta={[
            {
              name: 'description',
              content:
                'The premiere family gym at the heart of Ashby de la Zouch. We offer an extensive range of group fitness classes, personal coaching and a well equiped gym all within an clean and covid safe friendly environment.',
            },
            {
              name: 'keywords',
              content:
                'gym, fitness, personal training, ashby, ashby de la zouch, leicestershire, free pass, student membership, local, near me',
            },
          ]}
        >
          <script type="application/ld+json">
            {`
                  {
                    "@context": "https://schema.org",
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
        <Container>
          <TextSection />
        </Container>
      </Layout>
    )
  }
}

export default Index;

