import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import countDownTimer from '../utils/countdown.js';
import styled from 'styled-components';


const MembershipNewsSection = styled.section`
border-bottom: 2px solid purple;

border: 2px 0 solid purple;
padding: 8rem 4rem 4rem;
background: rgb(255,179,0);
background: linear-gradient(315deg, rgba(255,179,0,1) 0%, rgba(220,0,100,1) 100%);

color: white;
    h1 {
      color: white;
      text-shadow: 0 1px 0 rgba(0,0,0,.2),0 2px 8px rgba(0,0,0,.7);
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 1;
      margin: -2rem 0 1.6rem 0;

      span {
          text-transform: uppercase;
          color: white;
          background: orange;
          padding: .2rem .6rem;
          box-shadow: 8px 8px 8px rgba(0,0,0,0.3);
      }
    }

    h2 {
      color: white;
    }

    h3 {
      color: white;
    }

    p { color: white;}

    strong {
      color: white;
    }

    span {
      text-transform: uppercase;
      color: black;
      font-weight: 700;
      background: orange;
      padding: .2rem .3rem;
    }

    a {
      font-weight: 800;
      list-style:none;
    }
`;


const MembershipNews = () => {

  return (

    <MembershipNewsSection>
       <section id="news" className="news" >
           <div className="inner">
              <h1><span>10% OFF all membership plans!!!</span></h1>
              <h2>When you join before the end of March 2021!</h2>
              <p>
              With <span>state of the art equipment</span>, <span>a diverse range of classes</span>, <span>approachable staff</span> and all with our unique community feel, <strong>Fitness Republic</strong> is still <strong>the best place</strong> to <span role="img" aria-label="Strong Arm">workout 💪 </span><strong> + </strong> <span role="img" aria-label="Thumbs Up">FEEL GOOD!👍</span> in 2021 and beyond!</p>

              <h3>Ready to kickstart your fitness in April 2021?</h3>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Membership Plans"
                    to="/membership#plans"
                    className="special button next scrolly"
                  >
                    JOIN or RENEW NOW
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          </MembershipNewsSection>
  );
}


export default MembershipNews;