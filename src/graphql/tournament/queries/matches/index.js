import { gql } from "@apollo/client";

export const GET_MATCHES = gql`
  query ExampleQuery {
    getMatches {
      id
      tournamentId {
        id
        name
      }
      homeTeam {
        id
        name
      }
      visitingTeam {
        id
        name
      }
      homeTeamScore
      visitingTeamScore
      date
      status
    }
  }
`;

export const GET_MATCH = gql`
  query ExampleQuery($getMatchId: String!) {
    getMatch(id: $getMatchId) {
      id
      tournamentId {
        id
        name
      }
      homeTeam {
        id
        name
      }
      visitingTeam {
        id
        name
      }
      homeTeamScore
      visitingTeamScore
      date
      courtId
      status
    }
  }
`;