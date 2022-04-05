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
  CircularProgress,
  Alert,
} from "@mui/material";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

interface EmailProps {
  email: string;
}

interface PasswordProps {
  password: string;
}

export const LoginScreen = () => {
  const [email, setEmail] = useState<EmailProps>();
  const [password, setPassword] = useState<PasswordProps>();
  const [loading, setLoading] = useState(true);
  const [errorAlert, setErrorAlert] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    data ? navigate("/home") : setLoading(false);
  }, []);

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      data && localStorage.setItem("userInfo", JSON.stringify(data));
      data && navigate("/home");
    } catch (error) {
      setErrorAlert(error);
    }
  };

  return (
    <>
      {loading ? (
        <Box className="loading-box">
          <CircularProgress />
        </Box>
      ) : (
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
                  {errorAlert && (
                    <Alert severity="error">
                      Usuário não encontrado! Tente novamente ou, clique em
                      Esqueci a senha.
                    </Alert>
                  )}
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
                  <Link to="/registrar">Criar minha conta</Link>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      )}
    </>
  );
};
