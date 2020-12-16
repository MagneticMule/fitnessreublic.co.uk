import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="#" aria-label="Twitter" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Facebook" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Instagram" className="icon alt fa-instagram">
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
