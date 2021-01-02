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

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Fitness Republic - Gym in Ashby De La Zouch"
          meta={[
            { name: 'description', content: 'Hello, we are Fitness Republic! A family run gym at the heart of Ashby de la Zouch. We offer an extensive range of group fitness classes, personal coaching and a fun and friendly environment, all at an amazing affordable cost.' },
            { name: 'keywords', content: 'gym, fitness, personal training, ashby, leicestershire, free pass, student membership' },
          ]}>
        </Helmet>

        <Banner />

        <div id="main">

          <section id="news">
            <div className="inner">
              <header className="major">

              <h2>10% OFF MEMBERSHIP FEE'S</h2>
              </header>
              <p>
               <h3>THIS JANUARY WE WANT YOU!</h3>

                We are offering <strong>10% off our range of memberships each month</strong> when you pay  by direct debit.
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


        <section id="covid" className="covid">
            <div className="inner">


              <h2 className="align-center">Covid 19 and Safe Training</h2>

              <p>
                    Fitness Republic is working within tight Covid19 restrictions, keeping you fit, healthy and motivated while ensuring your safety.
                    <br/>As such we have implimented some basic guidlines that we ask that you follow when training at the gym.
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
