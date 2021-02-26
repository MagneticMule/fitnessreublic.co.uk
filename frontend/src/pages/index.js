import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import ladiesboxfit from '../assets/images/ladies-boxfit-class.jpg'
import pic04 from '../assets/images/pic04.jpg'
import Banner from '../components/Banner';
import Layout from '../components/layout';
import Form from '../components/Form';
import Video from '../components/Video';
import News from '../components/News.js';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Fitness Republic - Fitness Gym in Ashby"
          meta={[
            { name: 'description', content: 'The premiere family gym at the heart of Ashby de la Zouch. We offer an extensive range of group fitness classes, personal coaching and a well equiped gym all within an clean and covid safe friendly environment.' },
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
          <News/>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to Membership Page"
                to="/membership"
                className="link primary">
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
                className="link primary">
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
                className="link primary">
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
                    className="button">
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
