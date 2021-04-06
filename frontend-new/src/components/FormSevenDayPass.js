import React from 'react';
import { navigate } from 'gatsby-link';
import Button from  './widgets/Button.js';



const FormSevenDayPass = props => (
  <>
    <form
      name="SevenDayPass"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="#"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Seven Day Pass" />

      <div className="field first">
        <label htmlFor="name">What should we call you?</label>
        <input type="text" name="name" id="name" />
        <div className="field">
          <label htmlFor="message">Message (optional)</label>
          <textarea name="message" id="message" rows="6"></textarea>
        </div>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div className="field">
        <label htmlFor="phone">Give us your Telephone Number</label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div className="field">
        <label htmlFor="message">Who sent you her?</label>
        <textarea name="message" id="message" rows="6"></textarea>
      </div>
      <div className="field">
        <label htmlFor="message">Message (optional)</label>
        <textarea name="message" id="message" rows="6"></textarea>
      </div>

      <ul className="actions">
        <li>
          <input
            type="submit"
            value="Send Me The Free Seven Day Pass"
            className="button"
          />
        </li>
      </ul>
    </form>
  </>
)

export default FormSevenDayPass;