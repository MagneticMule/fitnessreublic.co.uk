import react from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const GenralButtonStyle = `
  padding: 1.8em 1em;
  font-size: 1rem;
  text-tranform: uppercase;
`;

const FormButtonStyle = `

`;

const CallToActionStyle = ``;



const Button = (props) => {
return(
  <Link to="{props.destination}">{props.title}</Link>
);
}


export default Button;