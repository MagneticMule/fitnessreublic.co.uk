import PropTypes from 'prop-types';
import react from 'react';
import styled from 'styled-components';

import {
  FaFacebook as facebook,
  FaTwitter as twitter,
  FaInstagram as instagram,
  FaYoutube as youtube,
  FaAddressCard as address,
  FaPhoneSquareAlt as phone,
} from 'react-icons/fa'

const CircleIcon = styled.div`
    display:inline-block;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    padding: 1rem;
    background: var(--orange);
    color: var(--white);
    border:.5rem solid white;
`;

const PlainIcon =styled.div`


`;

const Icon = props => {

      if (props.style == 'plain') {

        return (
          <PlainIcon></PlainIcon>
        );
      }

  return (


    <CircleIcon></CircleIcon>

  )
}

Greeting.propTypes = {
  iconName: PropTypes.oneOf([
    'phone',
    'information',
    'question',
    'facebook',
    'twitter',
    'youtube',
    'instagram',
    'whatsapp',
  ]),
  style: PropTypes.oneOf([
    'plain', 'circle'
  ])
}

export default Icon;