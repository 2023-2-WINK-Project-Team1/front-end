import './App.css';
import { ThemeProvider } from 'styled-components'; // 1. Global color를 사용하기 위한 import
import theme from './Theme.js'; // 2. Global color를 사용하기 위한 import
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TestPage from './pages/componentTest/TestPage';

function App() {
  return (
    // 3. styled-component의 ThemeProvider와 theme를 가져온 후, 컴포넌트의 최상단에 감싸준다.
    <ThemeProvider theme={theme}>
      <div id="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp/>}></Route>
            <Route path="/testPage" element={<TestPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
