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
            </div>

           </Layout>



)

export default Training