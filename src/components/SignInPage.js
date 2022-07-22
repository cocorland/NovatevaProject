import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserContext } from '../context/UserContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const theme = createTheme();

export default function SignInPage() {


  const [completado, setCompletado] = useState('0');
  const [autorizado, setAutorizado] = useState('0');

  const [formSignIn, setFormSignIn] = useState({
    "email": '',
    "password": ''
  });

  const { formState, setFormState } = useContext(UserContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') !== '' & data.get('password') !== '') {
      // Revisar que el correo electronico sea valido
      if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(data.get('email'))) {
        setFormSignIn({
          ...formSignIn,
          email: data.get('email'),
          password: data.get('password')
        });
        /* setCompletado('1'); */
      } else {
        setCompletado('2');
      }
    } else {
      setCompletado('3');
    }
  };

  useEffect(() => {
    const sendPOST = async (carga = {"email": '', "password": ''}) => {
      try {
        await axios.post('https://novateva-codetest.herokuapp.com/login', carga)
          .then(res => {
            const {users} = formState;
            const nombreUsuario = users.find(element => element.email === carga.email);
            /* console.log("El elemento nombreUsuario es: ", nombreUsuario); */
            
            /* Si no se ha cargado por primera vez la pagina principal, no habrá nada en contexto y por lo tanto, nombreUsuario sera undefined, implica que el programa no corre. */
            setFormState({
              ...formState,
              firstName: nombreUsuario.firstName,
              lastName: nombreUsuario.lastName,
              email: nombreUsuario.email,
              password: nombreUsuario.password,
              id: nombreUsuario._id,
              token: res.data.authorization
            });

            setAutorizado(res.data.success);
            console.log("La respuesta de la peticion es: ", autorizado);
          });
        } catch (error) {
          if (formSignIn.email == '' && formSignIn.password == '') {
            setAutorizado('0');
          } else {
            setAutorizado(error.response.data.success);
          }

      }
    }
    sendPOST(formSignIn);
    console.log("El formSignIn es: ", formSignIn);
  }, [formSignIn]);

  const displayErrorForm = (param) => {
    switch (param) {
      case param = '3':
        return <Alert severity="error">¡No has completado todos los campos obligatorios!</Alert>
      case param = '2':
        return <Alert severity="warning">¡Debes introducir una dirección de correo válida!</Alert>
      default:
        return <> </>
    }
  }

  const displayNoAuthenticatedForm = (param) => {
    switch (param) {
      case param = true:
        return <Navigate to="/messenger" />
      case param = false:
        return <Alert severity="error">Correo electrónico o contraseña incorrecta.</Alert>
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
            Inicia Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección de Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Stack sx={{ width: '100%' }} spacing={2}>
              {displayErrorForm(completado)}
            </Stack>
            <Stack sx={{ width: '100%' }} spacing={2}>
              {displayNoAuthenticatedForm(autorizado)}
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/SignUpPage" variant="body2">
                  {"¿No tienes cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}