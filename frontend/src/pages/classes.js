import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerClasses from '../components/BannerClasses';

import ladiesboxfit from '../assets/images/ladies-boxfit-class.jpg';
import ladyropes from '../assets/images/lady-ropes-fitness.jpg';
import ladymanboxfit from '../assets/images/lady-man-boxfit.jpg'

import timetable from '../assets/images/timetable/classtimetable.jpg'
import ad from '../assets/images/adforonline.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Fitness Classes</title>
            <meta name="description" content="Fitness Classes at Fitness Republic including timetable" />
            <script src="https://fitnessrepublic.clubright.co.uk/js/calendar.js"></script>
        </Helmet>

        <BannerClasses />

        <div id="main">
            <section className="clubright">
                <div className="inner">
                <header className="major">
                        <h2>Calender</h2>
                    </header>
                <div id="clubrightcalendar" data-clubname="fitnessrepublic" data-classes=""></div>
                </div>
            </section>

            <section id="timetable">
                <div className="inner">
                    <header className="major">
                        <h2>Virtual Timetable</h2>
                    </header>
                    <p>
                        Unfortunately, Leicestershire is currently in Tier 4 lockdown and as such we are not permitted to hold live classes here at the gym. However, we are currently hosting fitness classes online via our Fitness Republic TV initiative.
                    </p>
                    <div className="image fit">
                        <img src={timetable} alt="Our current class timetable" />
                    </div>
                            <ul className="actions">
                                <li><a href={timetable} download="fitness_republic_class_timetable.jpg" className="button">Download Timetable</a></li>
                            </ul>
                </div>
            </section>

            <section id="two" className="spotlights">
                <div className="inner">
                <section>
                    <div className="image fit">
                        <img src={ladiesboxfit} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Online Classes</h3>
                            </header>
                            <p>
                                However, from January 2021, we will again take our classes online. We will post our virtual timetable here in the next couple of weeks. Keep checking back to see how we are planning to keep you fit during this unprecedented times. Join us for our very own online class schedule. Lots of live workouts daily, easily accessible for working out in your own home. Lots of training tips too! <strong>All this for only £12.99 per month.</strong>
                            </p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/register" className="button">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="image fit">
                        <img src={ladyropes} alt="Lady in a fitness class using ropes" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Our Classes Include</h3>
                            </header>
                            One of the great things about group classes is that they provide a community that help keeps you motovated to reach your fitness goals. Our class schedule includes an incredible range of activities to suit any fitness level.
                            <br/><br/>
            <p>Our normal class schedule includes:<br/>
             <strong>
                        Spin
                        &bull; Pump
                        &bull; BalletBeFit
                        &bull; Yoga
                        &bull; Pilates
                        &bull; Clubbercise
                        &bull; Zumba
                        &bull; HIIT
                        &bull; Metafit
                        &bull; Combat
                        &bull; Glute Camp
                        &bull; Legs, Guns and Buns
                        </strong>
                    </p>
                        </div>
                    </div>

                </section>
                </div>
                </section>
            <section>
                <div className="inner">
                    <div className="image fit">
                        <img src={ad} alt="Our online classes" />
                    </div>
                    </div>
            </section>
        </div>

    </Layout>
)

export default Landing