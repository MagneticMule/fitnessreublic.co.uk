import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTraining from '../components/BannerTraining'


import simonsquat from '../assets/images/gym/fitness-republic-simon-squat.jpg'
import simontraining from '../assets/images/gym/fitness-republic-simon-personal-training.jpg'
import workout from '../assets/images/workout.jpg'
import physiorepublic from '../assets/images/physio-republic-logo.jpg'
import gym1 from '../assets/images/gym/fitness-republic-gym-1.jpg'
import gym2 from '../assets/images/gym/fitness-republic-gym-2.jpg'
import gym3 from '../assets/images/gym/fitness-republic-gym-3.jpg'
import simonropes from '../assets/images/gym/fitness-republic-simon-ropes.jpg'

const Training = (props) => (
    <Layout>
        <Helmet>
            <title>Personal Training Plans</title>
            <meta name="description" content="Personal Training Plans" />
        </Helmet>

        <BannerTraining />

        <div id="main">
            <section id="intro" >
                <div className="inner">


                <h4>What is Personal Training?</h4>

                    <p>A Personal Trainer is a qualified Fitness Coach who possesses the knowledge and ability to an exercise programme and Nutrition plan suited to your individual health and fitness goals.
                    Our Coaches are much more than just personal trainers, that’s why we call ourselves Coaches, we go the extra mile to get you results. Coaching you to success is a passion of ours, we know how good it feels to see you succeed and witness your confidence grow along with your increased fitness and a decreased waistline!</p>

                    <span className="image main"><img src={simonsquat} alt="" /></span>
                    <h4>Why Hire a Personal Trainer?</h4>

                    <p>There are many benefits to having a personal coach with you in the gym. Knowing that you have someone on your side helping you to achieve a better version of yourself gives you the confidence to know you can achieve your fitness goals, we give you the push you need on the days you really don’t feel like working out and always make sure you get the best out of your training sessions.</p>


                     <header className="major">
                        <h2>The Fitness Republic Personal Coaching Difference</h2>
                    </header>
                    <div className="grid-wrapper">

                         <div className="col-8">
                        <h3>
                            We can work directly with a physiotherapist
                        </h3>
                        <p>At our facility in Ashby de la Zouch we have an in house physiotherapist with over 20 years of experience. Craig is on hand to help with any injuries or problems you may have. Craig is also an active runner and performs running assessments held at the gym. All of our coaches work with Craig helping us to help you even more!</p>
                        </div>

                        <div className="col-4"><span className="image main"><img src={physiorepublic} alt="" /></span></div>
                        <div className="col-6">
                        <h3>We help with your individual requirements</h3>
                        <p>We know that everybody has different levels of fitness, flexibility, balance, strength, agility and motor skills. Many of our clients come to us with injuries and we have the knowledge and skills to work with them to continue training, rehabilitate and make consistent progress.</p>
                        </div>

                        <div className="col-6">
                        <h3>
                            We help you set realistic goals
                        </h3>
                        <p>We don’t make you false promises or sell you on un-achievable outcomes. We know how the body will react over a given time frame and we set goals accordingly, thus keeping you very motivated.</p>
                        </div>
<div className="col-12"><span className="image main"><img src={workout} alt="" /></span></div>
                        <div className="col-6">
                        <h3>
                            We can train you for a specific event
                        </h3>
                        <p>We have experience in training individuals for marathons, assault courses, body building competitions and triathlons. Whatever your event we can work with you to build success.</p>
                        </div>

                        <div className="col-6">
                        <h3>
                            We help you form good habits
                        </h3>
                        <p>Habits can make you or break you. In order to change you must change certain things you do daily. Most of the time we don’t even realise the habits we have that are having a detrimental effect on our bodies and mind.</p>
                        </div>


                        <div className="col-6"><span className="image main"><img src={gym1} alt="" /></span></div>

                        <div className="col-6"><span className="image main"><img src={gym2} alt="" /></span></div>
<div className="col-6">
                        <h3>
                            We will customise your fitness plan
                        </h3>
                        <p>Everyone is an individual and we realise that your fitness plan should be customised to suit you and your personal abilities.</p>
                        </div>

<div className="col-4">
                        <h3>
                            We can give nutritional advice
                        </h3>
                        <p> All our coaches have been educated in nutrition for fitness and sport, we also have a dedicated nutritionist on hand to answer questions or create <div className="col-4"></div>a nutrition plan to compliment your training.</p>
                        </div>

                        <div className="col-12"><span className="image main"><img src={simonropes} alt="" /></span></div>
 <div className="col-12">
                        <h3>We will keep you accountable</h3>
                        <p>Our Personal Coaches should keep you accountable. Ensuring you turn up and give it your all, every session. What you think is achievable and where you think your limitations are, is just the beginning.</p>
                        </div>

                </div>
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