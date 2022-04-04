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
} from "@mui/material";

import { useNavigate } from "react-router-dom";

interface EmailProps {
  email: string;
}

interface PasswordProps {
  password: string;
}

export const RegisterScreen = () => {
  const [email, setEmail] = useState<EmailProps>();
  const [password, setPassword] = useState<PasswordProps>();
  const [name, setName] = useState();

  const navigate = useNavigate();

  const handleLogin = () => {
    // console.log(email, password);
    // localStorage.setItem("isAuthenticaded", JSON.stringify(true));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Grid className="register-left-grid">
        <Card variant="outlined">
          <CardContent>
            <Stack gap={2}>
              <Typography variant="h5" textAlign={"center"}>
                Cadastre-se
              </Typography>
              <TextField
                id="standard-basic"
                type="text"
                label="Nome"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                type="email"
                id="standard-basic"
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                type="password"
                label="Senha"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="contained" onClick={handleLogin}>
                Cadastrar
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid className="register-right-grid">
        <Typography variant="h4" className="login-title">
          A rede social dos dev's quik
        </Typography>
      </Grid>
    </Box>
  );
};
