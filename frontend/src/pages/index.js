import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import ladiesboxfit from '../assets/images/ladies-boxfit-class.jpg'
import pic04 from '../assets/images/pic04.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'
import Form from '../components/Form'
import Video from '../components/Video'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet

          title="Fitness Republic - Fitness Gym in Ashby"
          meta={[
            { name: 'description', content: 'Hello, we are Fitness Republic! A family run gym at the heart of Ashby de la Zouch. We offer an extensive range of group fitness classes, personal coaching and a fun and friendly environment, all at an amazing affordable cost.' },
            { name: 'keywords', content: 'gym, fitness, personal training, ashby, ashby de la zouch, leicestershire, free pass, student membership, local, near me' },
          ]}>
              <script type="application/ld+json">
              {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://www.fitnessrepublic.co.uk",
                    "name": "Fitness Republic",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "01530 413330",
                      "contactType": "Enquiries"
                    }
                  }
                `}
            </script>
        </Helmet>

        <Banner />

        <div id="main">
          <section id="frtv" className="inverted">
            <div className="inner">
              <h1>The Latest from Fitness Republic TV</h1>
              <Video
                  videoSrcURL="https://www.youtube.com/embed/NiUYGQEagP0"
                  videoTitle="Latest Video from FItness Republic TV"
              />
            </div>
            <p>Remember, Fitness Republic TV has daily videos like this one over on our <a href="https://www.youtube.com/channel/UCU1sJeJfHC4tLO_x9vZiDhw" alt="Fitness republic TV">YouTube channel</a>.</p>
          </section>
          <section id="news" className="inverted">
            <div className="inner">
              <h1>Don't let National Lockdown hold your fitness back!</h1>
              <h2>Lets leave 2020 behind, and make 2021 your best year ever!</h2>

              <h2>10% OFF MEMBERSHIP FEE'S</h2>
              <h3>This Lockdown we want you</h3>
              <p>
                We are offering <strong>10% off our range of memberships each month</strong> when you pay by direct debit.
                <br/>
                Remember at Fitness Republic there are <strong>no Joining Fee's</strong> and <strong>no contracts</strong>.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Membership Plans Page"
                    to="/membership"
                    className="button special"
                  >
                    JOIN NOW
                  </Link>
                </li>
              </ul>
              <p>Join now and pay nothing until 15th March 2021</p>
            </div>
          </section>

          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to Membership Page"
                to="/membership"
                className="link primary"
              >
                <header className="major">
                  <h3>Membership</h3>
                  <p>Monthly or yearly memberships</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link
                aria-label="Link to Personal Training Page"
                to="/training"
                className="link primary"
              >
                <header className="major">
                  <h3>Personal Training</h3>
                  <p>Different plans available</p>
                </header>
              </Link>
            </article>

            <article style={{ backgroundImage: `url(${ladiesboxfit})` }}>
              <Link
                aria-label="Link to Fitness CLasses Page"
                to="/classes"
                className="link primary"
              >
                <header className="major">
                  <h3>Fitness Classes</h3>
                  <p>Group fitness at the gym and online</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link
                aria-label="Link to Team Page"
                to="/team"
                className="link primary"
              >
                <header className="major">
                  <h3>Our Team</h3>
                  <p>All About Us</p>
                </header>
              </Link>
            </article>
          </section>


        <section id="covid" className="inverted">
            <div className="inner">


              <h2 className="align-center">Covid 19 and Safe Training</h2>

              <p>
                    Fitness Republic is working within tight Covid19 restrictions, keeping you fit, healthy, motivated and safe.
                    <br/>
                    As such we have implimented some basic guidlines that we ask that you follow when training at the gym.
                    <br/>
                    This is a trying time for all of us but hopefully we can pull through this together.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Fitness Republic Policies on Covid"
                    to="/covid"
                    className="button"
                  >
                    OUR COVID ACTION PLAN
                  </Link>
                </li>
              </ul>
            </div>
          </section>


        </div>
      </Layout>
    )
  }
}

export default HomeIndex
