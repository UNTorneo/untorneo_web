import { gql } from "@apollo/client";

export const GET_SCHEDULES = gql`
  query GET_SCHEDULES {
    getSchedules {
      id
      openHour
      closeHour
      weekDay
      courtId
      price
    }
  }
`;

export const GET_SCHEDULE = gql`
  query GET_SCHEDULE ($getScheduleId: Int!) {
    getSchedule(id: $getScheduleId) {
      id
      openHour
      closeHour
      weekDay
      courtId
      price
    }
  }
`;