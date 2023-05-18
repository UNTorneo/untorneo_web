import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {LOGIN} from './../../graphql/auth/mutations/auth';
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ variables: { email: email, password:password } });
    console.log(response.data.login);
    if(response.data.login.error) setLoginError(response.data.login.error);
    else{
      localStorage.setItem('authToken',response.data.login.accessToken);
      localStorage.setItem('userId',response.data.login.user.id);
      console.log(localStorage.getItem('authToken'));
      console.log(localStorage.getItem('userId'));
      navigate("/home");
      
    }
  
      
    
  };

  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  
  return (
    <div>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        margin="normal"
        sx={{mb: 3}}
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        color="secondary"
        sx={{mb: 3}}
        value={password}
        onChange={handlePasswordChange}
      />

      {loginError && <h1> {loginError}</h1>}
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
    </div>
  );
};

export default Login;