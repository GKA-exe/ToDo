import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Todos from './components/todos/Todos';
import NavBar from './components/navBar/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { Container } from '@mui/material';
import "./App.js"
function App() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="md">
          <NavBar />
          <Container className="content-style">
            <Routes>
              <Route path="/signin" Component={SignIn} />
              <Route path="/signup" Component={SignUp} />
              <Route path="/" Component={Todos} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
