import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
    query GetTeams {
        getTeams {
        id
        name
        clanId
        members
        tournaments
        }
    }
`;

export const GET_TEAM_BY_ID = gql`
    query GetTeam($getTeamId: String!) {
        getTeam(id: $getTeamId) {
        id
        name
        clanId
        tournaments
        createdAt
        updatedAt
        members {
            username
            birthday
            email
            id
        }
        }
    }
`;

