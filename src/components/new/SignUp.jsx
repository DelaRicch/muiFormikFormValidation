import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Link,
  Paper,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { deepOrange } from "@mui/material/colors";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import VectorImg from "../../assets/auth.svg";

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
// Email Style
const EmailField = styled(TextField)({
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

const SignUp = () => {
  // View/ hide password
  const [view, setView] = useState(false);
  const handleView = () => {
    if (view === false) {
      setView(true);
    } else {
      setView(false);
    }
  };

  // View/ hide confirm password
  const [confirmView, setConfirmView] = useState(false);
  const handleConfirmView = () => {
    if (confirmView === false) {
      setConfirmView(true);
    } else {
      setConfirmView(false);
    }
  };

  return (
    <Paper
      elevation={3}
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        // background: "red",
        gap: "3rem",
        width: "max-content",
        height: "max-content",
        margin: "1rem auto",
      }}
    >
      <Box
        sx={{
          width: "22rem",
          height: "20rem",
          display: { xs: "none", md: "flex" },
          margin: "auto",
          padding: "0 1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={VectorImg}
          alt={VectorImg}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          height: "max-content",
          width: "20rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Avatar sx={{ bgcolor: deepOrange[500], marginInline: "auto" }}>
          <AddCircleOutlineIcon />
        </Avatar>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "600", color: "#5a5a5a" }}
        >
          Sign Up
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "300",
            color: "#5a5a5a",
            fontSize: "1rem",
            mb: 1,
          }}
        >
          Create a React Account
        </Typography>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <UsernameField
            id="name"
            label="Name"
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
          <EmailField
            id="email"
            label="Email"
            variant="standard"
            type="email"
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
          <FormControl required>
            <FormLabel id="radio-buttons-group-label" sx={{ color: "#535353" }}>
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue="male"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: deepOrange[500],
                      "&.Mui-checked": { color: deepOrange[500] },
                    }}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: deepOrange[500],
                      "&.Mui-checked": { color: deepOrange[500] },
                    }}
                  />
                }
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <PasswordField
            id="password"
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
          <PasswordField
            id="confirm-password"
            label="Confirm Password"
            variant="standard"
            type={confirmView ? "text" : "password"}
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
                  onClick={handleConfirmView}
                  sx={{ cursor: "default" }}
                >
                  {confirmView ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </InputAdornment>
              ),
            }}
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  color: deepOrange[500],
                  "&.Mui-checked": { color: deepOrange[500] },
                }}
              />
            }
            label="I accept the terms and conditions"
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "3rem",
              bgcolor: deepOrange[500],
              "&:hover": {
                bgcolor: deepOrange[800],
              },
            }}
          >
            Submit
          </Button>
        </form>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Typography variant="span">Already having an account?</Typography>
          <Link href="#" underline="hover" color={deepOrange[800]}>
            Sign In
          </Link>
        </div>
      </Box>
    </Paper>
  );
};

export default SignUp;
