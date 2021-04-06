import styled from 'styled-components';

const DualSection = styled.section`
  margin-top: 6em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 2fr 4fr 1fr;
  grid-template-areas:
  'sidebar content content
     image   image   image';
`;


export default DualSection;
