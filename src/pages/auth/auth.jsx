import { makeStyles } from '@material-ui/core/styles';
import Login from '../../templates/auth/login';
import Register from '../../templates/auth/register';

import './auth.css'

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
    }
  });


const Auth = () => {

    const classes = useStyles();
    const [isLogin, setIsLogin] = useState(true);

    
    
  
    return (
    <div className={classes.container}>
    
      <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
      


          <h1> Eres un Administrador? </h1>
          {isLogin ? (
           <Login/>
          ) : (
          <Register/>
          )}
          <p>
          {isLogin ? "Todavía no tienes una cuenta?" : 'Ya tienes una cuenta?'}
          <Button
          color="primary"
          onClick={() => setIsLogin((prevState) => !prevState)}
          >
          {isLogin ? 'Registrate acá' : 'Inicia sesión acá'}
          </Button>
          </p>


      
    
    </div>
  );
};
  
  export default Auth;


  