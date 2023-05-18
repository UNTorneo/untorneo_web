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
        sportId
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
        clanId
        name
      }
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
        description
        id
        location
      }
      venueName
      access
      status
    }
  }`;