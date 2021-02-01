import React from 'react';
import { Link} from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/layout';

import styled from 'styled-components';
import Video from '../components/Video';
import WorkoutList from '../components/WorkoutList';

const Title = styled.h1`
  font-size: 3rem;

`;

const Subtitle = styled.p`
  font-size: 2rem;
`;

export default function Workout({data}) {
  const workouts = data.workouts.edges;
  return (
    <Layout>
      <div id="main" className="alt">
        <section className="inner" alt="workout">
        <header className="major">
            <Title>Workouts</Title>
        </header>
        <Subtitle>There are {workouts.length} workouts available.</Subtitle>
        <WorkoutList workouts={workouts}/>
        </section>
      </div>
    </Layout>
  );
};


export const query = graphql`
{
 workouts: allSanityWorkout {
    edges {
      node {
        id
        name
        slug {
          current
        }
        description {
          children {
            text
            marks
          }
        }
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        workoutBuilder {
          isActive
          setName
          description
          repetitions
          excercise {
            video
            repetitions
            instructions
            excerciseName
          }
        }
      }
    }
  }
}

`;





