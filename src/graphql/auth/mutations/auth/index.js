import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ... on RequestToken {
      accessToken
      user {
        id
      }
      
    }
    ... on ErrorResponse {
      error
      
    }
  }
}
`;

export const REGISTER = gql`mutation AddUser($name: String!, $lastName: String!, $username: String!, $birthday: String!, $email: String!, $password: String!, $countryId: Int!, $cityId: Int!, $latitude: Float!, $longitude: Float!) {
  addUser(name: $name, lastName: $lastName, username: $username, birthday: $birthday, email: $email, password: $password, countryId: $countryId, cityId: $cityId, latitude: $latitude, longitude: $longitude) {
    ... on SucessResponse {
      message
    }
    ... on ErrorResponse {
      error
    }
  }
}`;

