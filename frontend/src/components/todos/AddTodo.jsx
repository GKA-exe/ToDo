import React, {useState} from "react";
import {useDispatch} from "react-redux"

import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./AddTodo.css";

import { addTodo } from "../../store/actions/todoActions";

function AddTodo() {
  const dispatch = useDispatch()

  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  })

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({
      name: "",
      isComplete: false,
    })
  }

  return (
    <>
      <form className="form-style"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="enter-todo"
          variant="outlined"
          label="enter-todo"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) => setTodo({...todo, name: e.target.value, date: new Date()})}
        />
        <Button
          className="submit-button"
          color="primary"
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          onChange={(e) => setTodo({...todo, name: e.target.value})}
        ></Button>
      </form>
    </>
  );
}

export default AddTodo;
