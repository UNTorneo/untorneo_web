import { gql } from "@apollo/client";

export const GET_PHOTOS = gql`
  query GET_PHOTOS {
    getPhotos {
      id
      courtId
      url
    }
  }
`;

export const GET_PHOTO = gql`
  query GET_PHOTO($getPhotoId: Int!) {
    getPhoto(id: $getPhotoId) {
      id
      courtId
      url
    }
  }
`;