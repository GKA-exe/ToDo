import React from "react";

import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./AddTodo.css";

function AddTodo() {
  return (
    <>
      <form className="form-style">
        <TextField id="enter-todo" label="enter-todo" autoFocus fullWidth />
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
