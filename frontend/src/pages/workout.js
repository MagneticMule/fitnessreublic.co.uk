import React from 'react';
import { Link} from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/layout';

import Video from '../components/Video';
import WorkoutList from '../components/WorkoutList';

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

export default function Workout({data}) {
  const workouts = data.workouts.edges;
  return (
    <Layout>
      <div id="main" className="alt">
        <section className="inner" alt="workout">
        <header className="major">
            <h2>Workouts</h2>
        </header>
        <p><strong>There are {workouts.length} workouts available.</strong></p>
        <WorkoutList workouts={workouts}/>
        {/* <ul>
          {data.workouts.edges.map(({ node: workout })=>(
            <li key={workout.id}>
              <h2>{workout.title}</h2>

            </li>
          ))}
        </ul> */}
        </section>
      </div>
    </Layout>
  );
};



