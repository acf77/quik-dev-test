import React, { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  Stack,
  Button,
  Card,
  CardContent,
  Box,
  Typography,
  FormControl,
} from "@mui/material";
import axios from "axios";

import { useNavigate } from "react-router-dom";

interface EmailProps {
  email: string;
}

interface PasswordProps {
  password: string;
}

export const LoginScreen = () => {
  const [email, setEmail] = useState<EmailProps>();
  const [password, setPassword] = useState<PasswordProps>();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("userInfo") ? navigate("/home") : navigate("/");
  }, []);

  const handleLogin = async () => {
    const { data } = await axios.post("http://localhost:8080/api/login", {
      email,
      password,
    });

    data && localStorage.setItem("userInfo", data);
    data && navigate("/home");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Grid className="left-grid">
        <Typography variant="h4" className="login-title">
          A rede social dos dev's quik
        </Typography>
      </Grid>
      <Grid className="right-grid">
        <Card variant="outlined">
          <CardContent>
            <Stack gap={2}>
              <Typography variant="h5" textAlign={"center"}>
                Entrar
              </Typography>

              <TextField
                type="email"
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type="password"
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="contained" onClick={handleLogin}>
                Login
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};
