import styled from 'styled-components';
import {device} from './DeviceSizes';

const Container = styled.div`
  margin: 0 auto;
  padding: 2em 4em;
  max-width: 1400px;

  /* @media ${device.mobileM} {
    padding: 2em;
  }

  @media ${device.laptop} {
    max-width: 980px;
  }

  @media ${device.laptopL} {
    max-width: 1200px;
  }

  @media ${device.desktop} {
    background: red;
    max-width: 1600px;
  } */
`;


export default Container;