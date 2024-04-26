import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Todos from './components/todos/Todos';
import NavBar from './components/navBar/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/" Component={Todos} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
