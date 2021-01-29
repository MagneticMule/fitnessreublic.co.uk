import React from 'react';
import { Link} from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/layout';

export const query = graphql`
{
  allSanityWorkout {
    edges {
      node {
        id
        title
        content {
          children {
            text
            marks
          }
        }
        background {
          asset {
            fluid {
              src
            }
          }
        }
        workoutBuilder {
          _type
          isActive
          setName
          description
          repetitions
          _rawExcercise
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

const Workout = ({data}) => (
  <Layout>
    <ul>
      {data.allSanityWorkout.edges.map(({ node: workout })=>(
        <li key={workout.id}>
          <h2>{workout.title}</h2>
          <p>{workout.workoutBuilder.map(({}))}</p>
          </li>
      ))}
    </ul>
  </Layout>
);
export default Workout;



