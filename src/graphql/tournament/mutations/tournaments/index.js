import { gql } from "@apollo/client";

export const ADD_TOURNAMENT = gql`
  mutation Mutation($tournament: AddTournament) {
    addTournament(tournament: $tournament) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const DELETE_TOURNAMENT = gql`
  mutation Mutation($deleteTournamentId: String!) {
    deleteTournament(id: $deleteTournamentId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const UPDATE_TOURNAMENT = gql`
  mutation Mutation($updateTournamentId: String!, $tournament: UpdateTournament!) {
    updateTournament(id: $updateTournamentId, tournament: $tournament) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const START_TOURNAMENT = gql`
  mutation StartTournament($startTournamentId: String!) {
    startTournament(id: $startTournamentId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const END_TOURNAMENT = gql`
  mutation Mutation($endTournamentId: String!) {
    endTournament(id: $endTournamentId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;