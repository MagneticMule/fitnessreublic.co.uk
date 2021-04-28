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
                        <WhatsAppWidget
                            companyName='Fitness Republic Ashby'
                            phoneNumber='+441530413330' textReplyTime='We Typically get back to you within the hour'
                            message="Hi there! Ready to increase your health and fitness in 2021? Let's chat about it"
                        />
            </div>
        )
    }
}

export default Layout
