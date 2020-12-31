import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

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
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Fitness Republic is working within tight Covid19 restrictions, keeping you fit, healthy and motivated while ensuring your safety.</p>
                    <p>As such we have implimented some basic guidlines that we ask that you follow when training at the gym.</p>
                    <p>This is a trying time for all of us but hopefully we can pull through this together.</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default Covid