
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --orange: #ffa61a;
    --maroon: #ff6b00;
    --white: #fff;
    --grey: #F0E1E1;
    --dark-grey: #797676;
    --deep-purple: #770264;
    --deeper-purple: #86259e;

    --background-gradient: linear-gradient(107.69deg, #2A292E 0.39%, #312746 100%);

    --dark-grad: linear-gradient(262.16deg, rgba(255, 107, 0, 0.2) 0.74%, rgba(255, 255, 255, 0) 99.73%), linear-gradient(98deg, rgba(0, 13, 129, 0.2) 0%, rgba(255, 255, 255, 0) 99.66%), #410E23;


    --lightsripe-grad: linear-gradient(262.04deg, rgba(255, 107, 0, 0.2) 48.53%, rgba(255, 255, 255, 0) 99.73%), linear-gradient(97.96deg, rgba(219, 0, 255, 0.3) 0.9%, rgba(255, 247, 248, 0) 100%);

    --rainbow-overlay: background: linear-gradient(89.95deg, rgba(255, 168, 0, 0.7) 0.91%, rgba(134, 37, 158, 0.7) 99.01%);

}

  body {
    color: var(--black);
  }

  a {
    color: var(--white);
    text-decoration: none;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--orange);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  ul {
    padding:0;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 24px;
  }

  html {
    scrollbar-width: thick;
    scrollbar-color: var(--yellow) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  li {
    list-style-type: none;
  }
  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}


/* tables */
table {
  margin-top:.8em;
  text-align:left;
}

td {
  text-transform:capitalize;
  padding-bottom:.33em;
  padding-left: 3em;
}

th {
    padding-bottom:.33em;
}


`

export default GlobalStyles;