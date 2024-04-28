import React from 'react'

import { Typography, TextField, Button } from "@mui/material";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <form className="signup-form-style" noValidate autoComplete="off">
        <Typography variant="h5">Sign-Up</Typography>
        <TextField
          id="enter-name"
          sx={{ marginBottom: "5px" }}
          type="Text"
          label="Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          sx={{ marginTop: "5px", marginBottom: "5px" }}
          id="enter-email"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="enter-password"
          sx={{ marginTop: "5px", marginBottom: "5px" }}
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
        />
        <Button
          className="signin-margin"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </>
  );
}

export default SignUp