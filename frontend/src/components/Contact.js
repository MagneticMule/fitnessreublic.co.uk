import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                    <form method="post" action="#" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                         <input type="hidden" name="bot-field" />

                        <input type="hidden" name="form-name" value="contact" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Telephone Number (optional)</label>
                        <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:info@fitnessrepublic.co.uk">info@fitnessrepublic.co.uk</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>01530 413330</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>59a Market Street<br/>
                             Ashby de la Zouch<br/>
                             LE65 1AH<br />
                        United Kingdom</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact