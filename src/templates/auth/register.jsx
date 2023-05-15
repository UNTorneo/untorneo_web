import React,{ useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import validator from "validator";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  if (citiesLoading || countriesLoading) return <p>Loading...</p>;
  if (citiesError || countriesError) return <p>Error : {error.message}</p>;

  
  const handleNameChange = (event) => {
    setName(event.target.value);
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
        email: email,
        password:password,
        name: name,
        username: username,
        birthday: changeDateFormat(selectedDate),
        countryId: Number(selectedCountry),
        cityId: Number(selectedCity),
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
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        {!isValidEmail && <span>Please enter a valid email address</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        {!isValidPassword && <span>Password must be at least 8 characters long</span>}
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {!isValidConfirmPassword && <span>Passwords do not match</span>}
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker value={selectedDate} onChange={handleDateChange } />
        </LocalizationProvider>
      </div>
    <div>
    <label htmlFor="city">City:</label>
    <select value={selectedCity} onChange={handleCityChange} id="city">
        {citiesData?.cities.map((option) => (
            <option key={option.id} value={option.id}>
            {option.name}
            </option>
        ))}
        </select>
    </div>
    <div>
    <label htmlFor="country">Country:</label>
    <select value={selectedCountry} onChange={handleCountryChange} id="country">
        {countriesData?.countries.map((option) => (
            <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
        </select>
    </div>
    {registerError && <h1> {registerError}</h1>}
      <button type="submit">Register</button>
    </form>
    </div>
  );
}

export default Register;