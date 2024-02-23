/*
 * This file defines the AdminPage page.
 */

import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  List,
  TextField,
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  FormControl,
  FormLabel,
} from "@mui/material";
import "../styles/AdminPage.css";

const ADMIN_PASSWORD = "Shandis";

/*
 * This is an example of how Axios can be used to make an HTTP GET request to a backend webserver.
 */
function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  function getQuestions() {
    var questions = [
      <ListItemButton>
        <ListItemText primary="What food can you eat every day without getting tired of?" />
      </ListItemButton>,
      <ListItemButton>
        <ListItemText primary="What three languages would you like to speak?" />
      </ListItemButton>,
      <ListItemButton>
        <ListItemText primary="Who is your favorite musician of all time?" />
      </ListItemButton>,
    ];
    return questions;
  }

  function handleAuthenticateButtonPressed() {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    }
    return;
  }

  // Define the handler for TextField updates
  function handleTextFieldChange(e) {
    setPassword(e.target.value);
  }

  /*
   * This return statement contains the HTML to be returned and rendered in the browser.
   */
  if (!authenticated) {
    return (
      <div className="admin">
        <div>
          <h2>Admin Page</h2>
        </div>
        <FormControl>
          <TextField
            label="Enter Password"
            variant="outlined"
            onChange={handleTextFieldChange}
          />
          <Button variant="contained" onClick={handleAuthenticateButtonPressed}>
            Submit
          </Button>
        </FormControl>
      </div>
    );
  } else {
    return (
      <div className="admin">
        <div>
          <h2>Admin Page</h2>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack>
              <TextField
                id="outlined-basic"
                placeholder="Insert new Question of the Day"
                variant="outlined"
              />
              <Button variant="contained">Add Question</Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">Previous Questions of the Day</Typography>
            <List>{getQuestions()}</List>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AdminPage;
