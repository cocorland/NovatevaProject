import * as React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const theme = createTheme();

export default function SignUpPage() {

  const [completado, setCompletado] = useState('0');
  
  const { formState, setFormState } = useContext( UserContext );

  const sendPOST = async (carga) => {
    try {
      axios.post('https://novateva-codetest.herokuapp.com/users', carga)
        .then(res => {
          console.log("Hablame");

        });
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Revisar que todos los campos esten completos
    if (data.get('firstName') !== '' & data.get('lastName') !== '' & data.get('email') !== '' & data.get('password') !== '') {
      // Revisar que el correo electronico sea valido
      if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(data.get('email'))) {
        setFormState({
          ...formState,
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          email: data.get('email'),
          password: data.get('password'),
        });
        setCompletado('1');
      } else {
        setCompletado('2');
      }
    } else {
      setCompletado('3');
    }
  };

  useEffect(() => {
    console.log(formState);
    sendPOST(formState);
  }, [formState]);

  const displayErrorForm = (param) => {
    switch (param) {
      case param = '1':
        return <Navigate to="/messenger" />
      case param = '3':
        return <Alert severity="error">¡No has completado todos los campos obligatorios!</Alert>
      case param = '2':
        return <Alert severity="warning">¡Debes introducir una dirección de correo válida!</Alert>
      default:
        return <> </>
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Regístrate
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Dirección de Correo Electrónico"
                  name="email"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Stack sx={{ width: '100%' }} spacing={2}>
              {displayErrorForm(completado)}
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/SignInPage" variant="body2">
                  Ya tienes una cuenta? Inicia Sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}