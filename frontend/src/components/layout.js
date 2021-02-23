import React from 'react'
import PropTypes from 'prop-types'
import CookieConsent from 'react-cookie-consent';
import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children } = this.props

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children}
                    <Contact />
                    <Footer />
                </div>
                    <Menu onToggleMenu={this.handleToggleMenu} />

                    <CookieConsent
                        buttonClasses="button special"
                        containerClasses="alert alert-warning col-lg-12"
                        contentClasses="text-capitalize"
                        location="bottom"
                        buttonText="X"
                        declineButtonText="Decline"
                        cookieName="gatsby-gdpr-google-analytics">
                            <div className="inner">
                            <p>We store cookies on your computer. These cookies are used to collect information about how you interact with this website and allow us to remember you.
                            We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors on this website.</p>
                            <p>By using this website you agree for us to store cookies on your local computer.</p>
                            </div>
                        </CookieConsent>

                        {/*
                        <WhatsAppWidget
                            companyName='Fitness Republic Ashby'
                            phoneNumber='+447980264894' textReplyTime='Typically replies within an hour or two'
                            message="Hi there! Ready to increase your health and fitness in 2021? Let's chat about it"
                        />
                        */}
            </div>
        )
    }
}

export default Layout
