import React from 'react'

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
            <a href="#two" name="Get Started" className="button next scrolly">
              FREE SEVEN DAY PASS
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)
export default Banner
