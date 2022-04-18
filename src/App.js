import React from 'react';
import styled from 'styled-components';
import './App.css';
import Head from './components/head';
import About from './components/about';
import Projects from './components/projects';
import garrett from './assets/garrett.jpg'


const StyledApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300;600&display=swap');
  display: flex;
  flex-flow: column;
  font-family: 'Mukta', sans-serif;
  align-items: center;
  margin-top: 5%;
`

const StyledTop = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: 100%;

  img.garrett {
    height: 500px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
`

const StyledBottom = styled.div`
  display: flex;
  flex-flow:row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2%;
`

function App() {
  return (
    <StyledApp>
      <StyledTop>
        <Head/>
        <img src={garrett} className="garrett"/>
      </StyledTop>
      <StyledBottom>
        <About/>
        {/* <Projects/> */}
      </StyledBottom>
    </StyledApp>
  );
}

export default App;
