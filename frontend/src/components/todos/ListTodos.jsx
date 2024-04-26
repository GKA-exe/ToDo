import React from 'react'

import { Typography } from '@mui/material'
import Todo from './Todo'
import "./ListTodos.css"

function ListTodos() {
  return (
    <>
      <div className="todos-style">
        <Typography variant="h5">The Todos:</Typography>
        <Todo />
        <Todo />
      </div>
    </>
  );
}

export default ListTodos