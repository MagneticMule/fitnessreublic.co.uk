import React from 'react';
import styled from 'styled-components';


const TextContent = styled.div`
  padding: 0;
  margin:0;
  grid-column: 2/7;
`;

const Background = styled.div`
  background-color:var(--white);
`;

const SectionTitle = styled.h2`
  margin:0;
  font-size: 4.209rem;
  font-weight: 300;
  letter-spacing: -0.05em;
  text-transform: capitalize;
  color: var(--deep-purple);
`;

const Subtitle = styled.h3`
  margin: 0;
  color: var(--orange);
  letter-spacing: -1px;
  font-weight: 300;
  text-transform: capitalize;
  color: var(--orange);
`;

const IntroText = styled.div`
  font-size: 2rem;
  letter-spacing: -1px;
  color: var(--orange);
  font-style: italic;
  margin: 0 0 2em 0;
  line-height: 1.5;
`;

const BodyText = styled.div`
  font-size: 1.2rem;
  margin: 1.2em 0 2em 0;
`;

const BackStripe = styled.div`
  & {
    position: relative;
    overflow: hidden;
  }

  &:before {
    z-index: -1;
    content: ' ';
    background: var(--lightsripe-grad);
    position: absolute;
    top: -200%;
    right: 0;
    left: -100%;
    bottom: 0;
    transform: skewY(-66deg);
  }

`;

const SideBar = styled.div`
 > p {
   color: var(--dark-grey);
 }
`;

const TextSection = () => {
return (
        <TextContent>
          <IntroText>
            If you really want to kickstart your fitness then a personal trainer
            may be the ideal way. Amet consectetur adipiscing elit pellentesque
            habitant morbi. Tortor condimentum lacinia quis vel eros donec ac.
            Quisque sagittis purus sit amet volutpat consequat maurissfds. If
            you really want to kickstart your fitness then a personal trainer
            may be the ideal way. Amet consectetur adipiscing elit pellentesque.
          </IntroText>
          <SectionTitle>What is Personal Training?</SectionTitle>
          <Subtitle>A basic overview of what we do</Subtitle>
          <BodyText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eaque dolores reprehenderit, quaerat suscipit debitis labore
            explicabo recusandae expedita quidem velit quos hic maxime, eius
            molestias ab, quia nulla? Consequuntur! Accusamus sint alias odio
          </BodyText>
          <SectionTitle>Who is personal training for?</SectionTitle>
          <Subtitle>
            The Short answer is anyone but there are exceptions
          </Subtitle>
          <BodyText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eaque dolores reprehenderit, quaerat suscipit debitis labore
            explicabo recusandae expedita quidem velit quos hic maxime, eius
            molestias ab, quia nulla? Consequuntur! Accusamus sint alias odio
          </BodyText>
          <SectionTitle>What can you expect?</SectionTitle>
          <Subtitle>Your ambitions and commitment play a key role</Subtitle>
          <BodyText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eaque dolores reprehenderit, quaerat suscipit debitis labore
            explicabo recusandae expedita quidem velit quos hic maxime, eius
            molestias ab, quia nulla? Consequuntur! Accusamus sint alias odio
            eligendi necessitatibus consequatur unde ratione excepturi.
            Blanditiis recusandae nostrum in iste modi corporis ipsum excepturi
            aliquam, ratione accusamus ut voluptate eum porro repellat ipsa
            veniam ipsam. Harum numquam sunt fugiat ipsa suscipit alias tenetur
            eaque deserunt reprehenderit itaque. Corrupti distinctio sint,
            officia consequatur ullam assumenda fuga modi numquam molestias
            molestiae eum ad, nobis voluptate delectus temporibus!
          </BodyText>
        </TextContent>
)

}

export default TextSection;