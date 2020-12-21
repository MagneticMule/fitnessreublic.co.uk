import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMembership from '../components/BannerMembership'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Membership = (props) => (
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
                        <h2>Gym and Class Memberships</h2>
                    </header>
                    <p>Simon, can you write a little about what the benfits are of this membership?
                    <br/> So, Gym and class. We probably want to say something about Classes taking place online AND at the Gym when lock down isnt an issue?</p>

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
                                                     <p>Full access to the Gym facilities and fitness classes for one person.</p>
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
                                                     <p>Full access to the Gym facilities and fitness classes for one person.</p>
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
                                                     <p>Full access to the Gym facilities and fitness classes for one person.</p>
                            <p><strong>£299</strong> Per Year</p>
                            <p>Payable either In Person or Onine</p>
                            <ul className="actions">
                                <li><a href="https://fitnessrepublic.clubright.co.uk/Account/Login"  className="button special">Choose Plan</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-4">
                    <div className="content box align-center">
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

                    <div className="col-4">
                    <div className="content box align-center">
                            <header>
                                <h3>Student Monthly</h3>
                            </header>
                            <p>Full access to the Gym facilities and fitness classes for one person.</p>
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
        </div>

    </Layout>
)

export default Membership