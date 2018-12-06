import React, { Component } from 'react';
import styled, { createGlobalStyle }  from 'styled-components';
import AppContainer from './container/AppContainer';

const MainWrapper = styled.div`
    text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: url(https://cssanimation.rocks/demo/starwars/images/bg.jpg) no-repeat center center fixed; 
    background-size: cover;
  }
`

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <GlobalStyle />
        <AppContainer />
      </MainWrapper>
    );
  }
}

export default App;
