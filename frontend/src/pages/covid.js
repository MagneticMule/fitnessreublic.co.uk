import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Video from '../components/Video'

import pic11 from '../assets/images/pic11.jpg'

const Covid = (props) => (
    <Layout>
        <Helmet>
            <title>Fitness Reoublic - Our Covid Action Plan</title>
            <meta name="description" content="Fitness Republic is working within tight Covid19 restrictions, keeping you fit, healthy and motivated while ensuring your safety" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <h1>Covid 19 and Training Safe</h1>
                    </header>

                    <p>Fitness Republic is working within tight Covid19 restrictions, keeping you fit, healthy and motivated while ensuring your safety. As such we have implimented some basic guidlines that we ask that you follow when training at the gym.
                    This is a trying time for all of us but hopefully we can pull through this together.</p>
<hr/>

                    <Video
                        videoSrcURL="https://www.youtube.com/embed/ozCYQ0K1NBE"
                        videoTitle="Train Safe at Fitness Republic Ashby De La Zouch"
                    />
                </div>
            </section>

            <section id="update">
                <div className="inner">
                <div className="grid-wrapper">
                <div className="col-4">
                    <strong>Get the latest information from GOV.UK about coronovirus.</strong>
                    </div>
                <div className="col-4">
                            <ul className="actions">
                                <li><a href="https://www.gov.uk/coronavirus" className="button right">Learn More</a></li>
                            </ul>
                            </div>
                            <div className="col-12">
                            <ul className="actions">
                                <li><a href="https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/coronavirus-vaccine/" className="right">Learn about vaccine progress from the NHS</a></li>
                            </ul>
                            </div>
                            </div>


</div></section>
        </div>
    </Layout>
)

export default Covid