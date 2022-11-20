import {
  Avatar,
  Button,
  InputAdornment,
  Link,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { deepOrange } from "@mui/material/colors";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Username Style
const UsernameField = styled(TextField)({
  "& label.Mui-focused": {
    color: deepOrange[500],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: deepOrange[500],
  },
  "&.Mui-focused fieldset": {
    borderColor: deepOrange[500],
  },
});

// Password Style
const PasswordField = styled(TextField)({
  "& label.Mui-focused": {
    color: deepOrange[500],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: deepOrange[500],
  },
  "&.Mui-focused fieldset": {
    borderColor: deepOrange[500],
  },
});

const Login = () => {
  // View/ hide password
  const [view, setView] = useState(false);
  const handleView = () => {
    if (view === false) {
      setView(true);
    } else {
      setView(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        height: "30rem",
        width: "23rem",
        margin: "3rem auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Avatar sx={{ bgcolor: deepOrange[500], marginInline: "auto" }}>
        <LockOpenIcon />
      </Avatar>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "600", color: "#5a5a5a" }}
      >
        Login
      </Typography>
      <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <UsernameField
          id="username"
          label="Username"
          variant="standard"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            ),
          }}
          required
        />
        <PasswordField
          id="username"
          label="Password"
          variant="standard"
          type={view ? "text" : "password"}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handleView}
                sx={{ cursor: "default" }}
              >
                {view ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
          required
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: "3rem",
            marginTop: "1rem",
            bgcolor: deepOrange[500],
            "&:hover": {
              bgcolor: deepOrange[800],
            },
          }}
        >
          Submit
        </Button>
      </form>
      <Link href="#" underline="hover" color={deepOrange[800]}>
        Forgot Password?
      </Link>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Typography variant="span">Not having an account?</Typography>
        <Link href="#" underline="hover" color={deepOrange[800]}>
          Sign Up
        </Link>
      </div>
    </Paper>
  );
};

export default Login;
