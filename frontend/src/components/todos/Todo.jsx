import React from "react";

import { Typography, Button, ButtonGroup } from "@mui/material";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "./Todo.css";

function Todo() {
  return (
    <>
      <div className="todo-style">
        <div>
          <Typography variant="subtitle1">Learn React</Typography>
          <Typography className="gray-style" variant="body2">
            Author: Krishna
          </Typography>
          <Typography className="gray-style" variant="body2">
            Added: 4 days ago
          </Typography>
        </div>

        <div>
          <ButtonGroup>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton color="success">
              <CheckCircleOutlineIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

export default Todo;
