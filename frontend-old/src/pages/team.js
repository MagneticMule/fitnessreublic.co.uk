import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTeam from '../components/BannerTeam'

import simon from '../assets/images/staff/simon.jpg'
import ben from '../assets/images/staff/ben.jpg'
import sarah from '../assets/images/staff/sarah.jpg'
import marcus from '../assets/images/staff/marcus.jpg'
import connor from '../assets/images/staff/connor.jpg'
import blanka from '../assets/images/staff/blanka.jpg'


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Fitness Republic - Our Team</title>
            <meta name="description" content="Team Page" />
        </Helmet>

        <BannerTeam />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Our Story</h2>
                    </header>
                    <p><strong>Fitness Republic first opened in May 2010.</strong>{' '}
                    We wanted to open a facility that  focused on creating the most comfortable, fun, friendly and social place to workout and better yourself. We’re extremely passionate about helping everyone reach their goals. Our team are a dedicated bunch of fitness and wellbeing professionals, here to guide and support you on your unique fitness journey.</p>
                    <p>
                    Our expert team have a wealth of fitness, nutrition and wellbeing knowledge. we care and support everyone who walks through our door. We’re passionate about helping people meet their fitness and health goals.</p>
                    <h4>Our ethos is to welcome everybody.</h4>
                    <p><strong>Facilities include: </strong>
                    High quality gym equipment,  cardiovascular and resistance.
                    Studio, air conditioned studio
                    Changing facilities, including showers, lockers and wc’s</p>
                </div>
            </section>
            <section id="two" className="spotlights inner">
                <section>
                    <div className="image">
                        <img src={simon} alt="Simon Pellecchia" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Simon Pellecchia</h3>
                            </header>

                            <h4>
                                What did you do before working at Fitness Republic?
                                </h4>

                            <p>
                                Before FR I was a Fitness Instructor/ Personal Trainer which I had done since I was 17 yrs old. Also I toured with my tribute band U2UK (U2 Tribute) across the UK and Europe. I play the part of the Edge.
                                </p>

                            <h4>
                                Why did you become a Personal Trainer?
                            </h4>

                            <p>
                                I have had a love of exercise and weight training since the age of 13, which was when I first started training. I love being able to help people to enjoy exercise, achieve their goals and have fun! This was my main reason for starting Fitness Republic.
                            </p>

                            <h4>
                                What aspect of work do you enjoy the most?
                            </h4>

                            <p>
                                I love what we have created here at FR. It’s a family, and very friendly place to workout! I love motivating, and feel that FR is a truly motivational and inspirational place to be. Both physically and mentally. Making people smile is something that really motivates me!
                            </p>

                            <h4>
                                It’s the weekend, how do you spend your time?
                            </h4>

                            <p>
                                Weekends is family time, but I love to pop into the gym to see everyone! We’re open 7 days a week and I can’t stay away!!! Also I am often playing in my band somewhere around the UK.
                            </p>

                            <h4>
                                Whats next for you?
                            </h4>

                            <p>
                                I am always looking to add to the FR experience and move forward. Both on a training level, and also a facility level. We have made so many improvements in the 10 years since we started, but am always looking for more! On a more personal level, I would like to improve my own fitness more as I get older, and I am striving for FR to be a top training centre where we have only the best coaches and most experienced team. As Fun is a big part of what we do, so is the correct training, good technique, and results!
                            </p>

                            <h4>
                                Favourite exercise?
                            </h4>

                            <p>
                                Got to be the Dumbbell Shoulder Press. Simple but highly effective!
                            </p>


                        </div>
                    </div>
                </section>


                <section>
                    <Link to="/generic" className="image">
                        <img src={sarah} alt="Sarah Pellecchia Director of Fitness Republic" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sarah Pellecchia</h3>
                            </header>
                            <p></p>
                            <ul className="actions">

                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={ben} alt="Ben Pellecchia" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Ben Pellecchia</h3>
                            </header>
                            <h4>
                                What did you do before working at Fitness Republic?
                            </h4>

                            <p>
                                I’ve spent many years experiencing different life paths, I've been a Supermarket Manager, Window cleaner, Warehouse worker, Website designer, Sound Engineer, Business Owner both online and bricks and mortar and directly prior to working at Fitness Republic i was a Roofline Specialist. (I'm sure there's a few things i've missed out that i don't currently recall)I was actually working on the roofs and website building while working at the before i went full time and the gym and focused all my efforts on being the best coach i could.
                            </p>

                            <h4>
                                Why did you become a personal trainer?
                            </h4>

                            <p>
                                I had always been into working out and trying to better myself and started out training my friends a long time ago, seeing how exercise, training and coaching helped both my friends and I,not only aesthetically but also with confidence and energy, gave me a boost and tremendous feeling of wellbeing. So i think the only next logical step was to make it a career and not just a pass time.
                            </p>

                            <h4>
                                What aspect of your work do you enjoy most?
                            </h4>

                            <p>
                                Playing a small part in clients overall wellbeing, it's not all about losing weight to look good on the beach. Being able to build their confidence, strength and feeling of self worth. I love when clients tell me how getting into exercise and health has changed them for the better from one person who managed to get himself off antidepressants and turn his life around to others who have managed to come a long way in reversing their  type 2 diabetes. If all i did was make it enjoyable enough for them to keep going then that is enough. As personal trainers we can only show you the door you have to walk through it.
                            </p>

                            <h4>
                                it's the weekend, how might you be spending your time?
                            </h4>

                            <p>
                                If I'm not working then I'll be spending my time playing my guitar or learning, personal growth plays a big part in my life and I can literally spend hours at a time watching lectures, reading or listening to podcasts, anything that will improve the quality of my life and hopefully i can pass on what i learn to others. I also like to take walks in the countryside.
                            </p>

                            <h4>
                                what's next for you?
                            </h4>

                            <p>
                                I want to take my experience and continue to pass it on, hopefully having some kind of impact, if only on a small scale. I want to focus on total wellbeing incorporating physical strength and fitness with mental strength and fitness, and contribute to a more peaceful state of mind for anyone who is willing to listen.
                            </p>


                            <h4>
                                Favourite exercise?
                            </h4>

                            <p>
                                It may not be one that you expect or even think of as an exercise, but i would have to say meditation. I have found that meditation has a profound effect on my overall health both mind and body. There have been thousands of studies done on the benefits of meditation and some of the results have been outstanding. It's not always that easy to do but once you get to grips with it and practice it consistently you will see why it's my favorite exercise.
                            </p>
                        </div>
                    </div>
                </section>
                                <section>
                    <Link to="/generic" className="image">
                        <img src={marcus} alt="Marcus White" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Marcus White</h3>
                            </header>

                            <h4>
                                What did you do before working at Fitness Republic?
                            </h4>
                            <p>
                                I was at Loughborough college , having done my A levels went straight to college to do my Qualifications.
                            </p>
                            <h4>Why did you become a personal trainer?</h4>
                            <p>
                                To help people, I love training and pushing myself towards my goals and wanted to help other people achieve their own goals.
                            </p>
                            <h4>What aspect of your work do you enjoy most?</h4>
                            <p>
                                The friendly atmosphere , meeting and getting to know lots of the members.
                            </p>
                            <h4>It's the weekend, how might you be spending your time?</h4>
                            <p>
                                Relaxing , playing football or going to concerts (covid permitting).
                            </p>
                            <h4>
                                What's next for you?
                            </h4>
                            <p>
                                Working hard towards my next competition.
                            </p>
                            <h4>
                                Favourite exercise
                            </h4>

                            <p>
                                DB chest press / dB shoulder press
                            </p>


                        </div>
                    </div>
                </section>


            <section>
                    <Link to="/generic" className="image">
                        <img src={blanka} alt="Blanka Harvey" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Blanka Harvey</h3>
                            </header>

                            <h4>
                                What did you do before working at Fitness Republic?
                            </h4>
                            <p>
                            Until the age of 18 I was a professional ballroom dancer , competing and doing shows in my native Hungary. I then moved to England and started a career in hospitality, holding various management roles before returning to my roots of dance with my Zumba career.
                            </p>
                            <h4>Why did you become a personal trainer?</h4>
                            <p>
                            After experiencing the benefits of personal training for myself and  how it is such a personal benefit. I wanted to help others achieve their goals for their fitness and lifestyle.
                            </p>
                            <h4>What aspect of your work do you enjoy most?</h4>
                            <p>
                            The people! Seeing the difference that my work does to someones life and the way they feel about themselves is deeply rewarding.
                            4) it's the weekend, how might you be spending your time?
                            </p>
                            <h4>It's the weekend, how might you be spending your time?</h4>
                            <p>
                            With two young children, I love nothing more than spending time with them - feeding ducks at our local park, doing arts & crafts and, of course, plenty of kisses and cuddles!
                            </p>
                            <h4>
                                What's next for you?
                            </h4>
                            <p>
                            To continue my fitness education and to grow within the industry. Helping others with the knowledge that I gain.
                            </p>
                            <h4>
                                Favourite exercise
                            </h4>

                            <p>
                                I love cardio machines and running within my local area with my headphones on - really helps me to "switch off" and get some "me" time!
                            </p>


                        </div>
                    </div>
                </section>
            <section>
                    <Link to="/generic" className="image">
                        <img src={connor} alt="Connor Chamberlain" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Connor Chamberlain</h3>
                            </header>

                            <h4>
                                What did you do before working at Fitness Republic?
                            </h4>
                            <p>
                            Before working at FR I was at Loughborough college training to become a PT, I also worked at FR for work experience, and had various part time jobs alongside this.
                            </p>
                            <h4>Why did you become a personal trainer?</h4>
                            <p>
                            I became a PT because I had a passion for training, it’s a lifestyle , I wanted to train people ,and show them how to get the results they want ASAP!
                            </p>
                            <h4>What aspect of your work do you enjoy most?</h4>
                            <p>
                            I enjoy the people side of my work and showing people they can achieve what they want! I’m a people person, even if it’s a quick chat with someone I’ve never spoke to before.
                            </p>
                            <h4>It's the weekend, how might you be spending your time?</h4>
                            <p>
                            I train over the weekend Friday, Sunday, usually on Saturdays I’ll relax, catch up with friends and family, and maybe have a cheat meal!
                            </p>
                            <h4>
                                What's next for you?
                            </h4>
                            <p>
                            I’m currently studying for my L3 PT course here at FR, once I’ve completed this I’d like to grow my client base even more, carry on working and learning more too. I’d like to get into bootcamp style training for clients as well.
                            </p>
                            <h4>
                                Favourite exercise
                            </h4>

                            <p>
                                My favourite exercise would have to be anything pressing so a DB chest press, it’s in all of the old school training, and I’ve found it works best for me!
                            </p>


                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing