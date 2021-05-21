import React from 'react';
import { navigate } from 'gatsby-link';



const FormSevenDayPass = (props)=> (
<>
 <form name="SevenDayPass" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="#">

 <input type="hidden" name="bot-field" />
 <input type="hidden" name="form-name" value="Seven Day Pass" />

 <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>

  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>

  <div className="field">
                        <label htmlFor="phone">Telephone Number</label>
                        <input type="tel" name="phone" id="phone" />
                    </div>
  <div className="field">
                        <label htmlFor="message">Message (optional)</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>

  <ul className="actions">
    <li>
      <input type="submit" value="Send Me The Free Seven Day Pass" className="button" />
    </li>
  </ul>
</form>
</>
  )

  export default FormSevenDayPass;