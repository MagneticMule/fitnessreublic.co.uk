import { Link } from 'gatsby';
import React from 'react';
import Video from './Video.js';
import Img from 'gatsby-image';


function SingleExcercise ( {excercise} ){
  return(
    <div class="box alt">
      <h4>{excercise.excerciseName}</h4>
      <blockquote>{excercise.instructions}</blockquote>
      <p>Repetitions: {excercise.repetitions}</p>
      <Video
      videoSrcURL={excercise.video}
      videoTitle={excercise.excersiseName}/>
      <hr/>

      <div className="field half first">
        <label htmlFor="reps">Repetitions</label>
        <input type="number" name="reps" id="reps" />
      </div>
      <div className="field half">
        <label htmlFor="weight">Weight</label>
        <input type="number" name="weight" id="weight" />
      </div>

    </div>
  )
}

function ExcerciseList ( {excercises}) {
  return(
    <>
    {excercises.map((excercise)=>(
      <ul>
        <li><SingleExcercise excercise={excercise}/></li>
      </ul>
    ))}
    </>
  )
}

function SingleSet({ set }) {
  return(
    <>
      <h3>{set.setName}</h3>
      <p><ExcerciseList excercises={set.excercise}/></p>
    </>
  )
}

function SetList({ sets }) {
  return(
    <>
      {sets.map((set)=>(
        <ul>
          <li><SingleSet set={set}/></li>
        </ul>
      ))}
    </>
  )
}

function SingleWorkout({ workout }) {
  const sets = workout.node.workoutBuilder;
  return (
  <div className="box">
    <Link to={`/workout/${workout.node.slug.current}`}>
      <h2>
        <span className="workout__title">{workout.node.name}</span>
      </h2>
            <span className="image main"><Img fluid={workout.node.image.asset.fluid} alt={workout.node.name} /></span>
    </Link>
    <p><SetList sets={sets} /></p>
    <ul className="actions">
    <li>
      <input type="submit" value="finished workout"/>
    </li>

  </ul>
  </div>
  )
}

export default function WorkoutList({workouts}) {
  return (
    <>
    {workouts.map((workout)=>(
      <ul>
        <li><SingleWorkout key={workout.node.id} workout={workout}/></li>
      </ul>

    ))}
    </>
  );
}