import styled from "styled-components";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";

import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme.js";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import * as React from "react";

import SignIn from "./components/Signin.jsx";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Video from "./Pages/Video.jsx";

// GlobalStyle to remove default browser margin
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

//Container has two parts left and then right with videos but navbar at the top
const Container=styled.div`
  display:flex;
`

//for all navbar and video cars-- the content right side
const Main=styled.div`
  flex:7;
  background-color:${({theme})=>theme.bg};
  height: 100vh;
  overflow-y: auto;
`

//for specifically videos -- not navbar

const Wrapper=styled.div`
  padding:20px 96px ;
  
`


function App() {
  const [darkMode,setDarkMode]=useState(true);
  return <>
    <GlobalStyle/>
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
      <BrowserRouter>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main>
            <Navbar/>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="/video/:id" element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
        </Container>
        </BrowserRouter>
    </ThemeProvider>
  </>
};

export default App;