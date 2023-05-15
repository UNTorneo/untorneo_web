import { gql } from "@apollo/client";

export const addMatch = gql`
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

export const deleteMatch = gql`
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

export const updateMatch = gql`
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

export const startMatch = gql`
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

export const endMatch = gql`
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