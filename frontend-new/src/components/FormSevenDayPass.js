import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby-link';



const Form = styled.form`
  margin-bottom:4em;
  grid-column: 2/4;
  display: flex;
  flex-direction: column;

  > .field {
    margin-top:2em;


  }
`;

const Label = styled.label`
  letter-spacing: -.02rem;
  display: block;
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--deep-purple);
  text-transform:capitalize;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 1em;
  border: 2px solid var(--orange);
  border-radius: 4px;
  background: #f4f4f4;
  border: 2px solid #ff7121;
  box-shadow: inset var(--shadow-low);

  &:focus {
    border: 2px solid var(--deep-purple);
    box-shadow: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  border: 2px solid var(--orange);
  border-radius: 4px;
  resize:none;
`;

const Button = styled.input`
  border:0;
  font-weight:700;
  border-radius: 8px;
  background: var(--dark-grad);
  cursor: pointer;
  color: var(--white);
  width:auto;
  padding: 1.2em 1.8em;
  box-shadow: var(--shadow-low);
`;

const FormSevenDayPass = props => (
  <Form
    name="Seven Day Pass"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="#"
  >
    <div className="field">
      <Input type="hidden" name="bot-field" />
      <Input type="hidden" name="form-name" value="Seven Day Pass" />
      <Label htmlFor="name">What should we call you?</Label>
      <Input type="text" name="name" id="name" placeholder="Your Name" />
    </div>

    <div className="field">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="you@somewhere.com"
      />
    </div>

    <div className="field">
      <Label htmlFor="phone">Telephone Number</Label>
      <Input type="tel" name="phone" id="phone" placeholder="01530 413330" />
    </div>
    <div className="field">
      <Label htmlFor="message">Message (optional)</Label>
      <TextArea name="message" id="message" rows="6" placeholder="Start the conversation..." ></TextArea>
    </div>
    <div className="field">
      <Button type="submit" value="Send Me The Free Seven Day Pass" />
    </div>
  </Form>
)

export default FormSevenDayPass;