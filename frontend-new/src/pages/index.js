import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
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
            { name: 'keywords', content: 'gym, fitness, personal training, ashby, leicestershire' },
          ]}
        ></Helmet>

        <Banner />
        <Form/>

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
                aria-label="Link to Membership Page"
                to="/membership"
                className="link primary"
              >
                <header className="major">
                  <h3>Personal Training</h3>
                  <p>Different plans available</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Classes</h3>
                  <p>Group fitness at the gym and online</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>The Team</h3>
                  <p>All About Us</p>
                </header>
              </Link>
            </article>
          </section>


          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Free Seven Day Pass</h2>
              </header>
              <p>
                Our Free Pass to gives you the opportunity to try out our facility before you commit. You can try the Gym, Classes, and our Personal Training service all FREE.
                If you feel comfortable to train on your own please feel free to pop in at anytime, we will just ask you to fill in a medical questionnaire before you start training.

                The free pass is available to people local to Ashby de la Zouch and surrounding areas.
                <br/>
                If you are only working in Ashby de la Zouch for a short period of time please contact us for a chat about what we can do for you.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Landing Page"
                    to="/landing"
                    className="button next"
                  >
                    Get Started
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
