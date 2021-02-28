import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import countDownTimer from '../utils/countdown.js';
const Header = styled.div`

  h1 {
    font-size: 4rem;
    text-shadow: 0 1px 0 rgba(0,0,0,.2),0 2px 8px rgba(0,0,0,.7);
    color: white;
    text-transform: uppercase;
  }

  h2 {
    text-shadow: 0 1px 0 rgba(0,0,0,.2),0 2px 8px rgba(0,0,0,.7);
    margin-top: 8rem;
    color: white;
    span {
      background: orange;
      padding: .4rem;
    }
  }

  h3 {
    color: white;
    span {
      padding: .3rem;
      background: rgba(0,0,0,.36);
    }
  }

  li {
    color: white;
  }
`;

const Banner = () => {
  const [time, setTime] = useState(countDownTimer('2021-04-15'));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(countDownTimer('2021-04-15'));
    }, 1000);
    return()=>clearTimeout(timer);
  });

  console.log(time);
  return (
  <section id="banner" className="major">
    <div className="inner">
        <Header>
        <h1>We are Fitness Republic</h1>
        <h3><span>We open our doors again in ⏱ {time}.</span></h3>
        <h3><span>To celebrate, we are offering 10% OFF all membership plans until the end MARCH 💪</span></h3>
        <ul className="actions">
          <li>
            <Link to="/membership" name="Get Started" className="special button next scrolly">
              JOIN US NOW
            </Link>
          </li>
        </ul>
      </Header>
    </div>
  </section>
  )
}
export default Banner
