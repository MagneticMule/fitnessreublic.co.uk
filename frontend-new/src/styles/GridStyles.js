import styled from 'styled-components';

const DualSection = styled.section`
  margin-top: 6em;
  display: grid;
  grid-gap: 2em 4em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'sidebar content content content,
   image image image image';
`;

const SplitSection = styled.section`
  display: grid;
  grid-gap: 2em 4em;
  grid-template-columns: repeat(auto);

`;



export {DualSection, SplitSection};
