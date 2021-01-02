import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMembership from '../components/BannerMembership'
import FormSevenDayPass from '../components/FormSevenDayPass'



const Membership = (props) => (
    <Layout>
        <Helmet>
            <title>Membership Plans</title>
            <meta name="description" content="Membership Plans" />
        </Helmet>

        <BannerMembership />
        <div className="inner">

        </div>

        <div id="main">
            <section id="freepass" className="alt">
                <div className="inner">
                    <header className="major">
                        <h2>Free Seven Day Pass</h2>
                    </header>
                    <p>Our Free Pass to gives you the opportunity to try out our facility before you commit. You can try the Gym, Classes, and our Personal Training service all FREE. If you feel comfortable to train on your own please feel free to pop in at anytime, we will just ask you to fill in a medical questionnaire before you start training.

                    To get started with your seven day pass just fill out the form below with your Name, Email and Phone Number so we can get back in contact with you as soon as possible.
                    </p>
                    <p>
                        The free pass is available to people local to Ashby de la Zouch and surrounding areas.

                    If you are only working in Ashby de la Zouch for a short period of time please let us know in the form below and we can chat about what we can do for you.</p>
                    <FormSevenDayPass />
                </div>
            </section>
            <section id="standard">
                <div className="inner">
                    <header className="major">
                        <h2>Gym and Class Memberships</h2>
                    </header>
                    <p>We have a mission to help as many people as possible achieve a healthy and strong body. Being fit and healthy has been proven to make all areas of life better, with a healthier body comes a healthier mind and a happier life.
                    These are our most popular monthly Direct Debit membership packages, by clicking Choose Plan, you will be directed to our registration page, and here, once registered, you will be able to see all of our options.</p>
                    <p>Once on the membership page scroll down to the bottom, and input the code <strong>10OFF</strong> into the promo code box to reveal the 10% off options.</p>

                    <h4>Remember, this month we have 10% off our Direct Debit Memberships.</h4>
                </div>

                <div className="inner">
                <div className="grid-wrapper">

                    <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Single Adult Monthly</h3>
                            </header>
                            <p>Full access to the Gym facilities and fitness classes for one person.</p>
                            <p><strong>£32.99</strong> Per Month</p>
                            <p>Payable Via Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>

                   <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Joint Adult Monthly</h3>
                            </header>
                                                     <p>Full access to the Gym facilities and fitness classes for two people.</p>
                            <p><strong>£55.00</strong> Per Month</p>
                            <p>Payable Via Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>

                   <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Single Adult Annual</h3>
                            </header>
                                                     <p>Full access to the Gym facilities and fitness classes for one person.</p>
                            <p><strong>£299</strong> Per Year</p>
                            <p>Payable either In Person or Online</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Single Adult Class Only</h3>
                            </header>
                            <p>Full access to fitness classes only. No gym access.</p>
                            <p><strong>£25.99</strong> Per Year</p>
                            <p>Payable via Monthly Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>


                    </div>
                </div>
            </section>

            <section id="student">

                    <div className="inner">
                    <header className="major">
                        <h2>Student Membership</h2>
                    </header>
                    <p>Supporting youth training
                    Fitness Republic is a very supportive of encouraging the whole family to exercise. This is why we support training from the age of 14 with our Student Membership. Getting started at an early age is found to be extremely beneficial to the success of keeping fit for life. We help and guide our younger members in the gym and class facility with expert advice and continued guidance and supervision. Correct form and technique is encouraged and shown on a continued basis, helping you get the best out of your training, safely and effectivly.
                    </p>
                    <p>If you are under 16 years of age we will require a written consent form to be signed by your guardian and brought into us at the gym. Download the print consent form here.</p>


                <div className="grid-wrapper">
                <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Student Monthly</h3>
                            </header>
                            <p>Full access to the Gym facilities and fitness classes for one person.</p>
                            <hr/>
                            <p><strong>£25.99</strong> Per Month</p>
                            <p>Payable via Monthly Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section id="online">

                    <div className="inner">
                    <header className="major">
                        <h2>Online Membership</h2>
                    </header>
                    <p>Join us for our very own online class schedule via Fitness Republic TV. Lots of live workouts daily, easily accessible for working out in your own home. Lots of training tips too!</p>


                <div className="grid-wrapper">
                <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Fitness Republic TV</h3>
                            </header>
                            <p>Full access to our online classes and private Facebook group.</p>
                            <hr/>
                            <p><strong>£12.99</strong> Per Month</p>
                            <p>Payable via Monthly Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section id="training">

                    <div className="inner">
                    <header className="major">
                        <h2>With Physical Training</h2>
                    </header>
                    <p>Personal Training can help you gain the most from your time at Fitness Republic. We offer three packages with combine the benefits of free gym access, classes and one on one personal training sessions.</p>


               <div className="grid-wrapper">
                <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Bronze Package</h3>
                            </header>
                            <p>Full access to the Gym facilities and fitness classes for one person.</p>
                            <p>One personal training session per month.</p>
                            <hr/>
                            <p><strong>£62.99</strong> Per Month</p>
                            <p>Payable via Monthly Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>
                <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Silver Package</h3>
                            </header>
                            <p>Full access to the Gym facilities and fitness classes for one person.</p>
                            <p>Two personal training session per month.</p>
                            <hr/>
                            <p><strong>£82.99</strong> Per Month</p>
                            <p>Payable via Monthly Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>
                <div className="col-4">
                    <div className="content box align-center alt">
                            <header>
                                <h3>Gold Package</h3>
                            </header>
                            <p>Full access to the Gym facilities and fitness classes for one person.</p>
                            <p>Four personal training session per month.</p>
                            <hr/>
                            <p><strong>£99.99</strong> Per Month</p>
                            <p>Payable via Monthly Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
             <section id="policy" className="inverted">

                    <div className="inner">

                        <h2>Cancellation</h2>

                    <p>Memberships cannot be cancelled prior to the agreed contract length that you have signed up for and the last payment has been made. A contract may be cancelled once the final payment has been made; this requires 30 days notice to Fitness Republic.</p>

                    <p>Please email info@fitnessrepublic.co.uk with your cancellation request. Upon receiving your email a cancellation form will be emailed to you to complete and be returned. Cancellations cannot be actioned until receipt of your cancellation form. please note one final payment may be due this will depend on weather your current payment falls within the 30 day cancellation period.</p>
                </div>
                </section>
                </div>
           </Layout>



)

export default Membership