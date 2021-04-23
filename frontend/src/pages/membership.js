import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet'
import Layout from '../components/layout';
import BannerMembership from '../components/BannerMembership';
import FormSevenDayPass from '../components/FormSevenDayPass';

//images


const Membership = props => (
  <Layout>
    <Helmet>
      <title>Membership Plans</title>
      <meta name="description" content="Membership Plans" />
    </Helmet>

    <BannerMembership />
    <div id="main">
       <section id="freepass" className="alt">
        <div className="inner">
          <header className="major">
            <h2>Free Seven Day Pass</h2>
          </header>
          <p>
            Our Free Pass to gives you the opportunity to try out our facility
            before you commit. You can try the Gym, Classes, and our Personal
            Training service all FREE. If you feel comfortable to train on your
            own please feel free to pop in at anytime, we will just ask you to
            fill in a medical questionnaire before you start training. To get
            started with your seven day pass just fill out the form below with
            your Name, Email and Phone Number so we can get back in contact with
            you as soon as possible.
          </p>
          <p>
            The free pass is available to people local to Ashby de la Zouch and
            surrounding areas. If you are only working in Ashby de la Zouch for
            a short period of time please let us know in the form below and we
            can chat about what we can do for you.
          </p>
          <FormSevenDayPass />
        </div>
      </section>
      <section id="plans">
        <div className="inner">
          <header className="major">
            <h2>Gym and Class Memberships</h2>
          </header>
          <p>
            We have a mission to help as many people as possible achieve a
            healthy and strong body. Being fit and healthy has been proven to
            make all areas of life better, with a healthier body comes a
            healthier mind and a happier life. We have a range of membersip
            options to suit everyone. Select one that suits you! Once you select
            your plan you will be taken over to our registration page.
            Registration only takes a few minutes and allows us to offer you the
            easiest and simplest method for your membership mangament.
          </p>
        </div>
        <div className="inner">
          <div className="grid-wrapper">
            <div className="col-4">
              <div className="content box align-center alt purple">
                <h3>
                  Single Adult <span>Monthly</span>
                </h3>
                <hr />
                <p>
                  Full access to the Gym facilities and fitness classes for one
                  person.
                </p>
                <hr />

                <p>
                  <strong>£32.99</strong> Per Month
                </p>
                <p>Payable Via Direct Debit</p>

                <a
                  href="https://fitnessrepublic.clubright.co.uk/Account/Login"
                  className="button action"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            <div className="col-4">
              <div className="content box align-center alt gold">
                <h3>
                  Single Adult <span>Annual</span>
                </h3>
                <hr />
                <p>
                  Full access to the Gym facilities and fitness classes for one
                  person.
                </p>
                <hr />
                <div className="save">Save £95</div>
                <p>
                  <strong>£299.99</strong> Per Year
                </p>
                <p>Payable either In Person or Online</p>

                <a
                  href="https://fitnessrepublic.clubright.co.uk/Account/Login"
                  className="button action"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            <div className="col-4">
              <div className="content box align-center alt pink">
                <h3>
                  Joint Adult <span>Monthly</span>
                </h3>
                <hr />
                <p>
                  Full access to the Gym facilities and fitness classes for two
                  people.
                </p>
                <hr />
                <p>
                  <strong>£55.00</strong> Per Month
                </p>
                <p>Payable Via Direct Debit</p>

                <a
                  href="https://fitnessrepublic.clubright.co.uk/Account/Login"
                  className="button action"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="student" className="light">
        <div className="inner">
          <header className="major">
            <h2>Student Membership</h2>
          </header>
          <p>
            Supporting youth training Fitness Republic is a very supportive of
            encouraging the whole family to exercise. This is why we support
            training from the age of 14 with our Student Membership. Getting
            started at an early age is found to be extremely beneficial to the
            success of keeping fit for life. We help and guide our younger
            members in the gym and class facility with expert advice and
            continued guidance and supervision. Correct form and technique is
            encouraged and shown on a continued basis, helping you get the best
            out of your training, safely and effectivly.
          </p>
          <strong>
            If you are under 16 years of age we will require a written consent
            form to be signed by your guardian and brought into us at the gym.
          </strong>
          <hr />
          <div className="grid-wrapper">
            <div className="col-4">
              <div className="content box align-center alt purple">
                <h3>
                  Single Student <span>Monthly</span>
                </h3>
                <hr />
                <p>
                  Full access to the Gym facilities and fitness classes for one
                  person.
                </p>
                <hr />
                <p>
                  <strong>£25.99</strong> Per Month
                </p>
                <p>Payable via Monthly Direct Debit</p>

                <a
                  href="https://fitnessrepublic.clubright.co.uk/Account/Login"
                  className="button action"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="policy" className="inverted">
        <div className="inner">
          <h2>Cancellation</h2>

          <p>
            Memberships cannot be cancelled prior to the agreed contract length
            that you have signed up for and the last payment has been made. A
            contract may be cancelled once the final payment has been made; this
            requires 30 days notice to Fitness Republic.
          </p>

          <p>
            Please email info@fitnessrepublic.co.uk with your cancellation
            request. Upon receiving your email a cancellation form will be
            emailed to you to complete and be returned. Cancellations cannot be
            actioned until receipt of your cancellation form. please note one
            final payment may be due this will depend on weather your current
            payment falls within the 30 day cancellation period.
          </p>
        </div>
      </section>


      <section id="training" className="alt">
        <div className="inner">
          <header className="major">
            <h2>With Personal Training</h2>
          </header>
          <p>
            Personal Training can help you gain the most from your time at
            Fitness Republic. We offer three packages with combine the benefits
            of free gym access, classes and one on one personal training
            sessions.
          </p>

          <div className="grid-wrapper">
            <div className="col-4">
              <div className="content box align-center alt">
                <h3>
                  Solid Impact <span>6 week Plan</span>
                </h3>
                <hr />
                <p className="description">
                  Haven't been in the gym for a while? Become familiar with
                  excercising safely and gaining a solid understanding of the
                  relationship between excercise and diet.
                </p>
                <ul>
                  <li>One PT session Per Week</li>
                  <li>Diet advice and support</li>
                  <li>Personalized Fitness Plan</li>
                </ul>
                <hr />
                <p>
                  <strong>£37.50</strong> Per week for 6 weeks
                </p>
                <p>
                  Payable via Card or Cash in one installment of £225
                  <hr />
                  Total cost: £225
                </p>
                <ul className="actions">
                  <li>
                    <a href="#contact" className="button special">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="content box align-center alt">
                <h3>
                  High Impact<span>8 Week Plan</span>
                </h3>
                <hr />
                <p className="description">
                  Looking to bulk up or slim down for an event? Perhaps you want
                  to hit the ground running after a period of inactivity? This
                  plan will help you achieve realistic and manitanable results.
                </p>
                <ul>
                  <li>Two PT sessions Per Week</li>
                  <li>Diet advice and support</li>
                  <li>Personalized Fitness Plan</li>
                </ul>
                <hr />
                <p>
                  <strong>£60.00</strong> Per Week for 8 weeks
                </p>
                <p>
                  Payable via Card or Cash in two installments of £240
                  <hr />
                  Total cost: £480
                </p>
                <ul className="actions">
                  <li>
                    <a href="#contact" className="button special">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="content box align-center alt">
                <h3>
                  Maximum Impact <span>12 week Plan</span>
                </h3>
                <hr />
                <p className="description">
                  Looking to build good habits over time and achieve your health
                  goals in a structured and manageable timeframe?
                </p>
                <ul>
                  <li>Two PT sessions Per Week</li>
                  <li>Diet advice and support</li>
                  <li>Personalized Fitness Plan</li>
                </ul>
                <hr />
                <p>
                  <strong>£66.00</strong> Per Week for 12 weeks
                </p>
                <p>
                  Payable via Card or Cash in four installments of £200
                  <hr/>
                  Total cost: £800
                </p>
                <ul className="actions">
                  <li>
                    <a href="#contact" className="button special">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Membership;