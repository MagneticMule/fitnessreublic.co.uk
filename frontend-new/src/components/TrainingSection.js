import React from "react";
import styled from "styled-components";
import { SplitSection } from "../styles/GridStyles";
import TrainingCard from "./widgets/TrainingCard";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem 0;
  background: var(--light-grad);
  box-shadow: inset 0px -4px 16px rgba(0, 0, 0, 0.25);
  padding: 4em;
  border-radius: 8px;
  gap: 0 5%;
  grid-column: 1/-1;
`;

const Header = styled.div`
  flex-basis: 100%;
`;

const Title = styled.h3`
  color: var(--white);
  font-weight: 500;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  margin-bottom: 2em;
`;

const Info = styled.div`
  color: var(--deep-purple);
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 2em;
  max-width: 900px;
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  > * {
    flex-basis: 50%;
    padding: 0 1em;
  }
`;

const TrainingSection = ({ title, subtitle, trainings }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Header>
      {trainings.map(training => (
        <TrainingCard training={training} />
      ))}

      <Info>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          quasi veniam, ad aliquam hic laudantium vitae omnis culpa officiis
          quis aspernatur iure itaque laboriosam rem necessitatibus atque minus
          deserunt unde.
        </div>
        <div>
          We have more membership options available in our Membership Page,
          including Joint trainings for couples and a reduced priced Student
          Membership.
        </div>
      </Info>
    </Container>
  );
};

export default TrainingSection;
