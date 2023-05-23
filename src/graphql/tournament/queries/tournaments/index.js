import { gql } from "@apollo/client";

export const GET_TOURNAMENTS = gql`
  query ExampleQuery {
    getTournaments {
      id
      name
      sportId {
        _id
        name
      }
      modeId {
        _id
        name
      }
      clanId {
        id
        name
      }
      venueId {
        id
        location
        description
      }
      venueName
      access
      status
    }
  }`;

export const GET_TOURNAMENT = gql`
  query ExampleQuery($getTournamentId: String!) {
    getTournament(id: $getTournamentId) {
      id
      name
      teams {
        id
        name
        members
      }
      sportId {
        _id
        name
        description
        recommendation
      }
      modeId {
        _id
        name
        winningPoints
        teamsNumber
        playersPerTeam
        description
        substitutePlayers
      }
      clanId {
        id
        name
      }
      venueId {
        id
        location
        description
      }
      venueName
      access
      status
    }
  }`;