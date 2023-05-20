import React,{ useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import validator from "validator";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { GET_CITIES, GET_COUNTRIES } from "./../../graphql/auth/queries/cities";
import {REGISTER} from './../../graphql/auth/mutations/auth';
import { Select, MenuItem } from '@material-ui/core';

const changeDateFormat = (d)=>{
    if(!d)return '-';
    
    const date = new Date(d.toString());
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    
    return `${year}-${month}-${day}`
}

const Register = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(1);
  const [registerError, setRegisterError] = useState(null);
  const [register, { data, loading, error }] = useMutation(REGISTER);
  const { loading: citiesLoading, error:citiesError, data: citiesData } = useQuery(GET_CITIES);
  const { loading: countriesLoading, error: countriesError, data: countriesData } = useQuery(GET_COUNTRIES);
  if (citiesLoading || countriesLoading) return <p>Loading...</p>;
  if (citiesError || countriesError) return <p>Error : {error.message}</p>;

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setIsValidEmail(validator.isEmail(email));
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setIsValidPassword(password.length >= 8);
    setIsValidConfirmPassword(confirmPassword === password);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    setIsValidConfirmPassword(confirmPassword === password);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(changeDateFormat(date.toString()));
  };

  const handleCityChange = (event) => {
    console.log(event.target.value);
    setSelectedCity(event.target.value);
    console.log('city',selectedCity)
  };

  const handleCountryChange = (event) => {
    console.log(event.target.value);
    setSelectedCountry(event.target.value);
    console.log('country',selectedCountry);
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await register({ variables: { 
        name: name,
        lastName:lastName,
        username: username,
        email: email,
        password:password,
        birthday: changeDateFormat(selectedDate),
        countryId: Number(selectedCountry),
        cityId: Number(selectedCity),
        isActive: true,
        latitude: 0,
        longitude: 0
     } });
    console.log(response);
    if(response.data.addUser.error) setRegisterError(response.data.addUser.error);
    else setRegisterError(response.data.addUser.message);
  
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="lastName">Apellidos:</label>
        <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        {!isValidEmail && <span>Por favor ingrese un Email valido.</span>}
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="Contraseña" value={password} onChange={handlePasswordChange} />
        {!isValidPassword && <span>La contraseña debe tener al menos 8 caracteres</span>}
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="confirm-password">Confirmar contraseña:</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {!isValidConfirmPassword && <span>Las contraseñas no coinciden</span>}
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="date">Fecha de nacimiento:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker value={selectedDate} onChange={handleDateChange } />
        </LocalizationProvider>
      </div>
    <div style={{ marginTop: '10px' }}>
    <label htmlFor="city">Ciudad:</label>
    <select value={selectedCity} onChange={handleCityChange} id="city">
        {citiesData?.cities.map((option) => (
            <option key={option.id} value={option.id}>
            {option.name}
            </option>
        ))}
        </select>
    </div>
    <div style={{ marginTop: '10px' }}>
    <label htmlFor="country">País:</label>
    <select value={selectedCountry} onChange={handleCountryChange} id="country">
        {countriesData?.countries.map((option) => (
            <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
        </select>
    </div>
    {registerError && <h1> {registerError}</h1>}
      <button type="submit" style={{ marginTop: '10px' }}>Registrarse</button>
    </form>
    </div>
  );
}

export default Register;