import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMembership from '../components/BannerMembership'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Membership Plans</title>
            <meta name="description" content="Membership Plans" />
        </Helmet>

        <BannerMembership />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Pure Gym Memberships</h2>
                    </header>
                    <p>Our <strong>Pure Gym</strong> memberships give you access to our...etc</p>
                    <h4>SIMON, are you still offering Gym only memberships, without classes? I am thinking we sort these plans out in terms of what is on offer. e.g. </h4>
                    <ul className="alt">
                        <li>Pure Gym</li>
                        <li>Gym and Classes</li>
                        <li>Maybe Gym Classes and some Personal Training???</li>
                    </ul>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                <div className="grid-wrapper">

                    <div className="col-4">
                    <div className="content box align-center">
                            <header>
                                <h3>Single Adult Monthly</h3>
                            </header>
                            <p>Full access to the Gym facilities for one person.</p>
                            <p><strong>£32.99</strong> Per Month</p>
                            <p>Payable Via Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>

                   <div className="col-4">
                    <div className="content box align-center">
                            <header>
                                <h3>Joint Adult Monthly</h3>
                            </header>
                            <p>Full access to the Gym facilities for one person.</p>
                            <p><strong>£55.00</strong> Per Month</p>
                            <p>Payable Via Direct Debit</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>

                   <div className="col-4">
                    <div className="content box align-center">
                            <header>
                                <h3>Single Adult Annual</h3>
                            </header>
                            <p>Full access to the Gym facilities for one person.</p>
                            <p><strong>£299</strong> Per Year</p>
                            <p>Payable either In Person or Onine</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>

                    </div>
                </div>
            </section>

        <section id="three">
                <div className="inner">
                    <header className="major">
                        <h2>Standard Memberships</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Landing