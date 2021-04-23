import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';

import 'normalize.css';

import GlobalStyles from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';

import Footer from './Footer.js';

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <GlobalStyles />
          <Typography />
          {children}
          <Footer />
          <WhatsAppWidget
            companyName="Fitness Republic Ashby"
            phoneNumber="+441530413330"
            textReplyTime="Typically replies within an hour or two"
            message="Hi there! Ready to increase your health and fitness in 2021? Let's chat about it"
          />
        </IconContext.Provider>
      </>
    )
  }
}

export default Layout