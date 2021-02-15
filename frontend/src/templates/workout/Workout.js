import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Helmet from 'react-helmet';

import Layout from '../../components/layout';

const WorkoutTemplate = ({ data }) => {
  const { workout } = data;
  return(
    <Layout>
      <Helmet>
          <title>{workout.name}</title>
          <meta name="description" content={workout.name} />
      </Helmet>
      <div id="main">
        <section>
          <Img fluid={workout.image.asset.fluid} />
          <div className="inner">
            <header className="major">
              <h1>{workout.name}</h1>
            </header>
          </div>
        </section>
      </div>
    </Layout>
  );
}


// $slug: String! = expect the slug to be of type String and ! = required
export const query = graphql`
  query ($slug: String!) {
    workout: sanityWorkout(slug: {
      current: {
        eq: $slug
      }
    }) {
      id
      name
      image {
          asset {
		        fluid(maxHeight: 200) {
			        ...GatsbySanityImageFluid
              }
            }
          }
        }
    }
`;

export default WorkoutTemplate;