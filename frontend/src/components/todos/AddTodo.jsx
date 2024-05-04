import React, {useState} from "react";
import {useDispatch} from "react-redux"
import axios from "axios";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./AddTodo.css";

import { addTodo } from "../../store/actions/todoActions";

function AddTodo() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
    author: "Krishna",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let addToDoRes = await axios.post("http://localhost:5000/api/todos", todo);
    setTodo({
      name: "",
      isComplete: false,
      author: "Krishna",
    });
    // dispatch(addTodo(todo));0
  };

  return (
    <>
      <form className="form-style" autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="enter-todo"
          variant="outlined"
          label="enter-todo"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) =>
            setTodo({ ...todo, name: e.target.value, date: new Date() })
          }
        />
        <Button
          className="submit-button"
          color="primary"
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
        ></Button>
      </form>
    </>
  );
}

export default AddTodo;
