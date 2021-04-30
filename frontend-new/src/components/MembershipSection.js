import React from "react";
import styled from "styled-components";
import {SplitSection} from '../styles/GridStyles';
import MembershipCard from './widgets/MembershipCard';


const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  margin: 4rem 0;
  background: linear-gradient(
      262.16deg,
      rgba(255, 107, 0, 0.3) 0.74%,
      rgba(255, 255, 255, 0) 99.73%
    ),
    linear-gradient(
      98deg,
      rgba(0, 13, 129, 0.3) 0%,
      rgba(255, 255, 255, 0) 99.66%
    ),
    #f0e1e1;
  box-shadow: inset 0px -4px 16px rgba(0, 0, 0, 0.25);
  padding: 4em;
  border-radius: 8px;
  gap: 10%;
  grid-column: 1/-1;
`;

const Header = styled.div`
  flex-basis: 100%;
`;

const Title = styled.h3`
  color: var(--white);
  font-weight: 500;
  margin:0;
  `;

const SubTitle = styled.p`
  font-size:1.4rem;
  font-weight:700;
  padding: 0;
  margin: 0;
  margin-bottom: 2em;
`;


const Info = styled.div`
  color: var(--deep-purple);
  font-size: 1.1rem;
  font-weight:500;
  margin-top:2em;
  max-width:900px;
  flex-basis:100%;
  display:flex;
  flex-direction:row;
  > * {
    flex-basis: 50%;
    padding:0 1em;
  }
`;


const MembershipSection = props => {
  return (
    <Container>
        <Header>
          <Title>{props.title}</Title>
          <SubTitle>{props.subtitle}</SubTitle>
        </Header>
        <MembershipCard
          color="gold"
          title={
            <>
              Single Adult <span>Monthly</span>
            </>
          }
          price={
            <>
              <span>£32.99</span> Per Month
            </>
          }
          description={
            "Full access to the Gym facilities and fitness classes for one person."
          }
          paymethod="Payable once per month via Direct Debit"
        />
        <MembershipCard
          title={
            <>
              Single Adult <span>Annual</span>
            </>
          }
          save={"Save £95"}
          price={
            <>
              <span>£299.99</span> Per Year
            </>
          }
          description={
            "Full access to the Gym facilities and fitness classes for one year."
          }
          paymethod="Payable in one installment at the Gym"
        />

      <Info><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quasi veniam, ad aliquam hic laudantium vitae omnis culpa officiis quis aspernatur iure itaque laboriosam rem necessitatibus atque minus deserunt unde.</div>
      <div>We have more membership options available in our Membership Page, including Joint Memberships for couples and a reduced priced Student Membership.</div></Info>
    </Container>
  );
};


export default MembershipSection;
