
import { gql } from "@apollo/client";

export const GET_MATCHES = gql`
query Query {
    getMatches {
      id
      tournamentId {
        id
        name
        teams
        sportId
        modeId
        clanId
        venueId
        venueName
        access
        status
        createdAt
        updatedAt
      }
      homeTeam {
        id
        name
        clanId
        members
        tournaments
        createdAt
        updatedAt
      }
      visitingTeam {
        id
        name
        clanId
        members
        tournaments
        createdAt
        updatedAt
      }
      homeTeamScore
      visitingTeamScore
      date
      courtId
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_MATCH = gql`
query GetMatch($getMatchId: String!) {
    getMatch(id: $getMatchId) {
      id
      tournamentId {
        id
        name
        teams
        sportId
        modeId
        clanId
        venueId
        venueName
        access
        status
        createdAt
        updatedAt
      }
      homeTeam {
        id
        name
        clanId
        members
        tournaments
        createdAt
        updatedAt
      }
      visitingTeam {
        id
        name
        clanId
        members
        tournaments
        createdAt
        updatedAt
      }
      homeTeamScore
      visitingTeamScore
      date
      courtId
      status
      createdAt
      updatedAt
    }
  }
`;
