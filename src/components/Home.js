import React from 'react';
import styled from "styled-components";
// import Card from './Card';
// import ImgSlider from "./ImgSlider";
import Leftside from './Leftside';
import Main from './Main';

function Home() {
  return (
    <Container>
      <Layout>
        <Leftside/>
        <Main/>
      </Layout>
    </Container>

  )
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  /* top: 72px; */
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: rgb(243,244,246);
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr);
  column-gap: 25px;
  row-gap: 25px; 
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
