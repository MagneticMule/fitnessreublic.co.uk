import React from 'react';
import styled from 'styled-components';


import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAddressCard,
  FaPhoneSquareAlt,
} from 'react-icons/fa';

import Container from '../styles/ContainerStyle.js';

import FRlogoStacked from '../assets/images/svg/fitness-republic-logo-stacked.svg';


const SiteFooter = styled.footer`
  padding-top: 4em;
  background: var(--dark-grad);
  color: var(--white);
`;

const SectionHeader = styled.div`
  > h4 {
    font-weight: 700;
    padding:0;
    margin:0;
  }

  > p {
    padding:0;
    color: var(--maroon);
    text-transform:uppercase;
    font-weight: 700;
    margin:0;
    font-size: .8rem;
    padding-top:.6em;
  }
`

const Address = styled.ul`
  > li {
    &:last-of-type {
      margin-top: 1em;
      font-weight: 300;
    }
  }

`;

const SocialIcons = styled.ul`


`;

  const TelephoneNumber = styled.div``;

  const Map = styled.div``;

  const Flex = styled.div`
    margin:8em 0;
    display:flex;
    align-items: flex-start;
    justify-content:space-between;
    grid-gap:10%;
  `;

  const Copyright = styled.div`
    background: rgba(0,0,0,0.3);
  `;



const Bio = styled.div`
  width:20%;
`;



const Footer = props => (
  <SiteFooter>
    <Container>
      <FRlogoStacked />
      <Flex>
        <section>
          <SectionHeader>
            <h4>Finding Us</h4>
            <p>We are right in the center of ashby de la zouch</p>
          </SectionHeader>
          <Address>
            <li>59a Market Street</li>
            <li>Ashby De La Zouch</li>
            <li>Leicestershire</li>
            <li>LE65 1AH</li>
            <li>
              <FaPhoneSquareAlt />
              <a href="tel:+4401530413330"> 01530 413330</a>
            </li>
            <li>
              <a href="#">
                <FaAddressCard />
                {' Download vCard  >>'}
              </a>
            </li>
          </Address>
        </section>
        <section>
          <SectionHeader>
            <h4>Opening Times</h4>
            <p>Seven days a week</p>
          </SectionHeader>
          <table>
            <tr>
              <th>Monday</th>
              <td>5.30am - 9.00pm</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>5.30am - 9.00pm</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>5.30am - 9.00pm</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>5.30am - 9.00pm</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>5.30am - 9.00pm</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>5.30am - 6pm</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>10am - 4pm</td>
            </tr>
          </table>
        </section>
        <section>
          <SectionHeader>
            <h4>Keep in Touch</h4>
            <p>We post every day on the usual social channels</p>
          </SectionHeader>
          <SocialIcons>
            <li>
              <a href="https://twitter.com/ashbyfitness" aria-label="Twitter">
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/fitnessrepublicashby/?fref=ts"
                aria-label="Facebook"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fitnessrepublicgym/"
                aria-label="Instagram"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCcFx40fq_DCUcwatqgNgBAA"
                aria-label="YouTube"
              >
                <FaYoutube /> YouTube
              </a>
            </li>
          </SocialIcons>
        </section>
      </Flex>
    </Container>
    <Copyright>
      <Container>
        <strong>
          All content &copy; Fitness Republic 2021. All rights reserved.
        </strong>
        <p>
          The material on this site may not be reproduced, distributed,
          transmitted, cached or otherwise used, except with the prior written
          permission of Fitness Republic.
        </p>
      </Container>
    </Copyright>
  </SiteFooter>
)

export default Footer;
