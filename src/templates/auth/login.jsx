import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {LOGIN} from './../../graphql/mutations/auth';
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ variables: { email: email, password:password } });
    console.log(response.data.login);
    if(response.data.login.error) setLoginError(response.data.login.error);
    else{
      localStorage.setItem('auth-token',response.data.login.accessToken);
      console.log(localStorage.getItem('auth-token'));
      navigate("/");
    }
  
      
    
  };

  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
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