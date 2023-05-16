import { gql } from "@apollo/client";

export const ADD_MATCH = gql`
  mutation Mutation($match: AddMatch!) {
    addMatch(match: $match) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const DELETE_MATCH = gql`
  mutation Mutation($updateMatchId: String!, $match: UpdateMatch!) {
    updateMatch(id: $updateMatchId, match: $match) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const UPDATE_MATCH = gql`
  mutation Mutation($updateMatchId: String!, $match: UpdateMatch!) {
    updateMatch(id: $updateMatchId, match: $match) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const START_MATCH = gql`
  mutation Mutation($startMatchId: String!) {
    startMatch(id: $startMatchId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const END_MATCH = gql`
  mutation Mutation($endMatchId: String!) {
    endMatch(id: $endMatchId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;