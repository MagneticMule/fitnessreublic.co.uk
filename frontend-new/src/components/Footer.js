import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/ashbyfitness" aria-label="Twitter" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/fitnessrepublicashby/?fref=ts" aria-label="Facebook" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fitnessrepublicgym/" aria-label="Instagram" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
                <li>
          <a href="https://www.youtube.com/channel/UCcFx40fq_DCUcwatqgNgBAA" aria-label="YouTube" className="icon alt fa-youtube">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Fitness Republic</li>
        <li>
          Development: <a href="mailto:magneticmule@gmail.com">Tom Sweeney</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
