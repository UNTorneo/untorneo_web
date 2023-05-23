import { gql } from "@apollo/client";

export const ADD_PHOTO = gql`
  mutation ADD_PHOTO($photo: AddPhoto) {
    addPhoto(photo: $photo) {
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
//   "photo": {
//     "courtId": null,
//     "url": null
//   }
// }
export const UPDATE_PHOTO = gql`
  mutation UPDATE_PHOTO($updatePhotoId: Int!, $photo: UpdatePhoto!) {
    updatePhoto(id: $updatePhotoId, photo: $photo) {
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
//   "updatePhotoId": null,
//   "photo": null
// }

export const DELETE_PHOTO = gql`
  mutation DELETE_PHOTO($deletePhotoId: Int!) {
    deletePhoto(id: $deletePhotoId) {
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
//   "deletePhotoId": null
// }