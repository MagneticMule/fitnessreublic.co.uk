import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import countDownTimer from '../utils/countdown.js';


const Header = styled.div`
  h1 {
    font-family: Lato, sans-serif;
    font-size: 4rem;
    color: black;

    background: linear-gradient(
        262.16deg,
        rgba(255, 107, 0, 0.8) 0.74%,
        rgba(255, 255, 255, 0.1) 99.73%
      ),
      linear-gradient(
        98deg,
        rgba(0, 13, 129, 0.5) 0%,
        rgba(255, 255, 255, 0.2) 99.66%
      ),
      linear-gradient(0deg, #410e23, #410e23);

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    -moz-text-fill-color: transparent;
    text-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25) inset;
    font-size: 4.209rem;
    color: #770264;
    letter-spacing: -0.05em;
    text-transform: capitalize;
  }

  h2 {
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.7);
    margin-top: 8rem;
    color: white;
    span {
      background: orange;
      padding: 0.4rem;
    }
  }

  p {
    width: fit-content;

    background: linear-gradient(
      110deg,
      rgba(120, 60, 0, 1) 0%,
      rgba(134, 37, 158, 1) 100%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: bold;
    font-size: 1.1rem;
    text-transform: uppercase;
    span {
      padding: 0.3rem;
      background: rgba(0, 0, 0, 0.36);
    }
  }

  li {
    color: white;
  }
`

const Banner = () => {
  const [time, setTime] = useState(countDownTimer('2021-04-12'));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(countDownTimer('2021-04-12'));
    }, 1000);
    return()=>clearTimeout(timer);
  });

  console.log(time);
  return (
  <section id="banner" className="major">
    <div className="inner">
        <Header>
        <h1>We are Fitness Republic</h1>
        <p>A family run gym with a focus on inclusive fitness</p>
        <ul className="actions">
          <li>
            <Link to="/membership" name="Get Started" className="button scrolly">
              Get Started Free
            </Link>
          </li>
        </ul>
      </Header>
    </div>
  </section>
  )
}
export default Banner
