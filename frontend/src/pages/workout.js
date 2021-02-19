import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Chart from '../components/workout/Chart.js';
import Chart2 from '../components/workout/Chart2.js';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


import styled from 'styled-components';
import WorkoutLayout from '../components/workout/WorkoutLayout.js';
import WorkoutList from '../components/workout/WorkoutList';


const Header = styled.section`
  text-align:center;
  color: var(--white);
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 100;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
`;

const Container = styled.div`
  background: linear-gradient(107.69deg, #2A292E 0.39%, #312746 99.31%);
  padding: 2rem;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Workout = ({data})=> {
  const { user } = useAuth0();
  const workouts = data.workouts.edges;
  return (
    <WorkoutLayout>
      <Container>
        <Header>
        {/* <Title>Good Morning {user.name.split(' ')[0]}</Title> */}
        <Title>Good Morning Thomas</Title>
        <Subtitle>There are {workouts.length} workouts available</Subtitle>
        </Header>
        <ChartContainer>
          <Chart/>
          <Chart2/>
        </ChartContainer>
        <WorkoutList workouts={workouts}/>
      </Container>
    </WorkoutLayout>
  );
  };

export default withAuthenticationRequired(Workout);
// export default Workout;

export const query = graphql`
{
 workouts: allSanityWorkout {
    edges {
      node {
        id
        name
        target{
					upper_body
          lower_body
        }
        slug {
          current
        }
        description
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





