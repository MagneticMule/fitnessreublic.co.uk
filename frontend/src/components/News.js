import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const NewsSection = styled.section`
border-bottom: 2px solid purple;
margin: -2rem;
border: 2px 0 solid purple;
padding: 4rem;
background: rgb(255,179,0);
background: linear-gradient(315deg, rgba(255,179,0,1) 0%, rgba(189,0,255,1) 100%);

color: white;
    h1 {
      color: white;
      transform: rotate(-2deg);
      text-shadow: 0 1px 0 rgba(0,0,0,.2),0 2px 8px rgba(0,0,0,.7);
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: 0;
      line-height:1;
      margin: -2rem 0 1.6rem;

      span {
          text-transform: uppercase;
          color: white;
          font-weight: 900;
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
      font-weight: 900;
      background: orange;
      padding: .2rem .3rem;
    }

    a {
      font-weight: 900;
      list-style:none;
    }
`;


const News = () => {
  return (
    <NewsSection>
       <section id="news" className="news" >
              <h1><span>WE ARE ALMOST THERE!!!</span></h1>
              <h2>With an end date now firmly in sight, we are ready to help you get back into our gym</h2>
              <strong>We hope you are still enjoying our online classes!?</strong>
              <p>
              Of course, We understand that training at home or outside is great but not for everyone. It can be difficult to motivate yourself to train and eat right. At <strong>Fitness Republic</strong> you can train in a <strong>strong, safe and friendly</strong> environment with a lovely inclusive family feel.
              </p>
              <p>
              With <span>state of the art equipment</span>, <span>a diverse range of classes</span>, <span>approachable staff</span> and all with our unique community feel, <strong>Fitness Republic</strong> is still <strong>the best place</strong> to <span>workout 💪 </span><strong> + </strong> <span>FEEL GOOD!👍</span> in 2021 and beyond!</p>

              <h3>Ready to kickstart your fitness in April 2021?</h3>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Membership Plans Page"
                    to="/membership"
                    className="button special arrow"
                  >
                    JOIN or RENEW NOW
                  </Link>
                </li>
              </ul>


          </section>
          </NewsSection>

  );
}


export default News;