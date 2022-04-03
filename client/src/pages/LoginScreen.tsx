import React from "react";
import {
  TextField,
  Grid,
  Stack,
  Button,
  Card,
  CardContent,
} from "@mui/material";

export const LoginScreen = () => {
  return (
    <Grid paddingY={5} sx={{ margin: "auto", maxWidth: 500 }}>
      <Card variant="outlined">
        <CardContent>
          <Stack gap={2}>
            <TextField
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              type="password"
              label="Password"
              variant="standard"
            />
            <Button variant="contained">Login</Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
