import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import Login from '../../templates/auth/login';
import Register from '../../templates/auth/register';

const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    input: {
      margin: '10px',
    },
    button: {
      margin: '10px',
    },
  });


const Auth = () => {

    const classes = useStyles();
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Logging in', email, password);
        setIsLogin(true);
      }
    
      const handleRegister = (event) => {
        event.preventDefault();
        console.log('Registering', email, password);
        setIsLogin(false);
      };
    
  
    return (<div className={classes.container}>
    
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      
      {isLogin ? (
         <Login />
      ) : (
        <Register/>
      )}
      <p>
        {isLogin ? "Don't have an account yet?" : 'Already have an account?'}
        <Button
          color="primary"
          onClick={() => setIsLogin((prevState) => !prevState)}
        >
          {isLogin ? 'Register here' : 'Login here'}
        </Button>
      </p>
    
  </div>
);
};
  
  export default Auth;