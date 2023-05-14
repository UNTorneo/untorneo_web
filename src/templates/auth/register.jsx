import React,{ useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import validator from "validator";
import DatePicker from "react-datepicker";
import { GET_CITIES, GET_COUNTRIES } from "./../../graphql/queries/cities";
import {REGISTER} from './../../graphql/mutations/auth';
import { Select, MenuItem } from '@material-ui/core';

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
  const [register, { data, loading, error }] = useMutation(REGISTER);
  const { loading: citiesLoading, error:citiesError, data: citiesData } = useQuery(GET_CITIES);
  const { loading: countriesLoading, error: countriesError, data: countriesData } = useQuery(GET_COUNTRIES);
  
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
  };

  const handleCityChange = (city) => {
    console.log(city);
    setSelectedCity(city);
    console.log('city',selectedCity)
  };

  const handleCountryChange = (country) => {
    console.log(country);
    setSelectedCountry(country);
    console.log('country',selectedCountry);
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await register({ variables: { 
        email: email,
        password:password,
        name: name,
        username: username,
        birthday: date,
        countryId: selectedCountry,
        cityId: selectedCity,
        latitude: 0,
        longitude: 0
     } });
    console.log(response);
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
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
    <div>
    <label htmlFor="city">City:</label>
    <select value={selectedCity} onChange={handleCityChange} id="city">
        {citiesData?.cities.map((option) => (
            <option key={option.id} value={option.name}>
            {option.name}
            </option>
        ))}
        </select>
    </div>
    <div>
    <label htmlFor="country">Country:</label>
    <select value={selectedCountry} onChange={handleCountryChange} id="country">
        {countriesData?.countries.map((option) => (
            <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
        </select>
    </div>
      <button type="submit">Register</button>
    </form>
    </div>
  );
}

export default Register;