import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const NewsSection = styled.section`

padding: 4rem;
background: rgb(255,179,0);
background: linear-gradient(315deg, rgba(255,179,0,1) 0%, rgba(189,0,255,1) 100%);

color: white;
    h1 {

      text-shadow: 0 1px 0 rgba(0,0,0,.2),0 2px 8px rgba(0,0,0,.7);
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: 0;
    }

    h2 {
      color: white;
    }

    h3 {
      color: white;
    }

    p{ color: white;}

    strong {
      color: white;
    }
`;


const News = () => {
  return (

    <NewsSection>
       <section id="news" className="news" >
              <h1>WE ARE ALMOST THERE!</h1>
              <h2>With an end date now firmly in sight, we are ready to help you get back into our gym</h2>
              <h2>10% OFF MEMBERSHIP FEE'S</h2>
              <h3>This Lockdown we want you</h3>
              <p>
                We are offering <strong>10% off our range of memberships each month</strong> when you pay by direct debit.
                <br/>
                Remember at Fitness Republic there are <strong>no Joining Fee's</strong> and <strong>no contracts</strong>.
              </p>
              <ul>
                <li>
                  <Link
                    aria-label="Link to Membership Plans Page"
                    to="/membership#"
                    className="button special"
                  >
                    JOIN NOW
                  </Link>
                </li>
              </ul>
              <p>Join now and pay nothing until 15th March 2021</p>

          </section>
          </NewsSection>

  );
}


export default News;