import { gql } from "@apollo/client";

export const ADD_SCHEDULE = gql`
  mutation AddSchedule($schedule: AddSchedule) {
    addSchedule(schedule: $schedule) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
`;
// {
//   "schedule": {
//     "closeHour": null,
//     "courtId": null,
//     "openHour": null,
//     "price": null,
//     "weekDay": null
//   }
// }
export const UPDATE_SCHEDULE = gql`
  mutation UPDATE_SCHEDULE($updateScheduleId: Int!, $schedule: UpdateSchedule!) {
    updateSchedule(id: $updateScheduleId, schedule: $schedule) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
`;

// {
//   "updateScheduleId": null,
//   "schedule": {
//     "id": null,
//     "openHour": null,
//     "closeHour": null,
//     "weekDay": null,
//     "courtId": null,
//     "price": null
//   }
// }

export const DELETE_SCHEDULE = gql`
  mutation DeleteSchedule($deleteScheduleId: Int!) {
    deleteSchedule(id: $deleteScheduleId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
`;

// {
//   "deleteScheduleId": null
// }