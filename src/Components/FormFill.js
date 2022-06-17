import React, { useState } from "react";
import { ReactDOM } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Switch,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import "./FormFill.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DatePicker from "react-datepicker";
import FormLabel from "@mui/material/FormLabel";

import "react-datepicker/dist/react-datepicker.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FormFill = () => {
  const [loginId, setloginId] = useState("");
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setgender] = useState(1);
  const [isAdmin, setIsAdmin] = useState(1);
  const [isSwitchChecked, setSwitchChecked] = useState(true);
  const [bgColour, setbgColour] = useState("#808080");
  const onClickOfloginButton = () => {
    console.log("LoginId:", loginId);
    console.log("Password:", loginId);
    console.log("Is admin?:", isAdmin);
    console.log("Gender:", gender);
    console.log("DOB", startDate);
  };
  const onAdminSwitchChange = (e) => {
    setIsAdmin(e.target.checked);
  };
  return (
    <div className="body">
      <Box m={2}>
        <Container maxWidth="sm">
          <Item>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "primary.dark" }}>
                  <div
                    style={{
                      padding: "2rem",
                      fontSize: "24px",
                      color: "white",
                    }}
                  >
                    Create User
                  </div>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Box>
                  <TextField
                    fullWidth
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    id="outlined-required"
                    label="Name"
                    defaultValue="John Smith"
                  />
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box>
                  <Avatar sx={{ bgcolor: deepOrange[500] }} label="Avatar">
                    {userName.charAt(0) + userName.charAt(1)}
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <TextField
                    fullWidth
                    required
                    value={loginId}
                    onChange={(e) => setloginId(e.target.value)}
                    id="outlined-required"
                    label="Username"
                    defaultValue="abc@xyz.com"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <TextField
                    type={"Password"}
                    fullWidth
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="outlined-required"
                    label="Set Password"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <TextField
                    type={"Password"}
                    fullWidth
                    required
                    id="outlined-required"
                    label="Confirm Password"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      label="Gender"
                      onChange={(e) => setgender(e.target.value)}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <FormControlLabel
                    control={
                      <Switch onChange={(e) => onAdminSwitchChange(e)} />
                    }
                    label="Is Administrator?"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Date of Birth
                  </FormLabel>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Have you read and understood the terms and conditions?"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Button
                    variant="contained"
                    colour={{
                      main: "#FFFFF",
                      darker: "#053e85",
                    }}
                    onClick={() => onClickOfloginButton()}
                  >
                    Create User
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Container>
      </Box>
    </div>
  );
};

export default FormFill;
