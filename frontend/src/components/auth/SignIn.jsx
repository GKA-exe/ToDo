import React from 'react'

import { Typography, Button, TextField } from "@mui/material";

import "./SignIn.css";

function SignIn() {
  return (
    <>
      <form className="signin-form-style" noValidate autoComplete="off">
        <Typography variant="h5">Sign-In</Typography>
        <TextField
          sx={{ marginTop: "10px" }}
          id="enter-email"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="enter-password"
          sx={{ marginTop: "10px", marginBottom: "5px" }}
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
          Sign In
        </Button>
      </form>
    </>
  );
}

export default SignIn