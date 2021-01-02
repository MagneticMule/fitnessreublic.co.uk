import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTraining from '../components/BannerTraining'

const Training = (props) => (
    <Layout>
        <Helmet>
            <title>Personal Training Plans</title>
            <meta name="description" content="Personal Training Plans" />
        </Helmet>

        <BannerTraining />

        <div id="main">
            <section id="intro">
                <div className="inner">


                <h4>What is Personal Training?</h4>

                    <p>A Personal Trainer is a qualified Fitness Coach who possesses the knowledge and ability to an exercise programme and Nutrition plan suited to your individual health and fitness goals.
                    Our Coaches are much more than just personal trainers, that’s why we call ourselves Coaches, we go the extra mile to get you results. Coaching you to success is a passion of ours, we know how good it feels to see you succeed and witness your confidence grow along with your increased fitness and a decreased waistline!</p>


                <h4>Why Hire a Personal Trainer?</h4>

                    <p>There are many benefits to having a personal coach with you in the gym. Knowing that you have someone on your side helping you to achieve a better version of yourself gives you the confidence to know you can achieve your fitness goals, we give you the push you need on the days you really don’t feel like working out and always make sure you get the best out of your training sessions.</p>


                     <header className="major">
                        <h4>The Fitness Republic Personal Coaching Difference</h4>
                    </header>

                    <dl>
                        <dt>We will keep you accountable</dt>
                        <dd><p>Our Personal Coaches should keep you accountable. Ensuring you turn up and give it your all, every session.</p></dd>

                        <dt>We help with your individual requirements</dt>
                        <dd><p>We know that everybody has different levels of fitness, flexibility, balance, strength, agility and motor skills. Many of our clients come to us with injuries and we have the knowledge and skills to work with them to continue training, rehabilitate and make consistent progress.</p></dd>

                        <dt>We help you set realistic goals</dt>
                        <dd><p>We don’t make you false promises or sell you on un-achievable outcomes. We know how the body will react over a given time frame and we set goals accordingly, thus keeping you very motivated.</p></dd>

                        <dt>We can train you for a specific event</dt>
                        <dd><p>We have experience in training individuals for marathons, assault courses, body building competitions and triathlons. Whatever your event we can work with you to build success.</p></dd>

                        <dt>We help you form good habitst</dt>
                        <dd><p>Habits can make you or break you. In order to change you must change certain things you do daily. Most of the time we don’t even realise the habits we have that are having a detrimental effect on our bodies and mind.</p></dd>

                        <dt>We will customise your fitness plan</dt>
                        <dd><p>Everyone is an individual and we realise that your fitness plan should be customised to suit you and your personal abilities.</p></dd>

                        <dt>We can give nutritional advice</dt>
                        <dd><p> All our coaches have been educated in nutrition for fitness and sport, we also have a dedicated nutritionist on hand to answer questions or create a nutrition plan to compliment your training.</p></dd>

                        <dt>We can work directly with a physiotherapist</dt>
                        <dd><p>At our facility in Ashby de la Zouch we have an in house physiotherapist with over 20 years of experience. Craig is on hand to help with any injuries or problems you may have. Craig is also an active runner and performs running assessments held at the gym. All of our coaches work with Craig helping us to help you even more!</p></dd>

                        <dt>We challenge you</dt>
                        <dd><p> What you think is achievable and where you think your limitations are, is just the beginning.</p></dd>


                    </dl>

                </div>
                </section>


                 <section id="membership">

                    <div className="inner">
                    <header className="major">
                        <h2>Physical Training</h2>
                    </header>
                    <p>Personal Training can help you gain the most from your time at Fitness Republic. We offer three packages with combine the benefits of free gym access, classes and one on one personal training sessions.</p>


               <div className="grid-wrapper">
                <div className="col-4">
                    <div className="content box align-center">
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
                    <div className="content box align-center">
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
                    <div className="content box align-center">
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

            </div>

           </Layout>



)

export default Training