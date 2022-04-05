import React, { useState } from "react";
import {
  TextField,
  Grid,
  Stack,
  Button,
  Card,
  CardContent,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

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
  const [username, setUsername] = useState();
  const [errorAlert, setErrorAlert] = useState();
  const [successAlert, setSuccessAlert] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleRegister = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/register", {
        name,
        username,
        email,
        password,
      });

      data && setSuccessAlert(true);
    } catch (error) {
      setErrorAlert(`Usuário ou email já cadastrados. ${error.message}`);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Grid className="register-left-grid">
        <Card variant="outlined">
          <CardContent>
            <Stack gap={2}>
              {successAlert && (
                <Alert severity="success">
                  Conta criada com sucesso! <Link to="/">Entrar</Link>{" "}
                </Alert>
              )}
              {errorAlert && <Alert severity="error">{errorAlert}</Alert>}
              <Typography variant="h5" textAlign={"center"}>
                Cadastre-se
              </Typography>
              <TextField
                type="text"
                label="Nome"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                type="text"
                label="Nome de usuário"
                variant="standard"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                type="email"
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type="password"
                label="Senha"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="contained" onClick={handleRegister}>
                Cadastrar
              </Button>
              <Link to="/">Já possui conta? Entrar</Link>
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
