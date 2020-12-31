import React from 'react'
import { Link } from 'gatsby'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>We are Fitness Republic</h1>
      </header>
      <div className="content">
        <p>
          A family run gym
          <br />
          in the heart of Ashby De la Zouch.
        </p>
        <ul className="actions">
          <li>
            <Link to="/membership#freepass" name="Get Started" className="button next scrolly">
              FREE SEVEN DAY PASS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)
export default Banner
