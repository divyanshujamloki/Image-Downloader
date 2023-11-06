import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function Signin() {
  const boxStyle = {
    border: "2px solid #000",
  };


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        p={3}
        bgcolor="white"
        borderRadius={8}
        boxShadow={3}
        style={boxStyle}
      >
        <Typography variant="h4" align="center">
          Sign In
        </Typography>
        <form>
          <TextField
            label="UserName"
            variant="outlined"
            fullWidth
            required
            placeholder="xyz@1233.gmail.com"
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 16 }}
          
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
