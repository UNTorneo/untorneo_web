import { gql } from "@apollo/client";

export const ADD_TEAM = gql`
  mutation Mutation($team: AddTeam) {
    addTeam(team: $team) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const DELETE_TEAM = gql`
mutation Mutation($deleteTeamId: String!) {
  deleteTeam(id: $deleteTeamId) {
    ... on SucessResponse {
      message
    }
    ... on ErrorResponse {
      error
    }
  }
}`;

export const UPDATE_TEAM = gql`
  mutation Mutation($updateTeamId: String!, $team: UpdateTeam!) {
    updateTeam(id: $updateTeamId, team: $team) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;

export const REGISTER_TEAM = gql`
  mutation Mutation($teamId: String!, $tournamentId: String!) {
    registerTeam(teamId: $teamId, tournamentId: $tournamentId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }`;