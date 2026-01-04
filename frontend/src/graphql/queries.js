import { gql } from "@apollo/client";

export const GET_SHIPMENTS = gql`
  query GetShipments($page: Int, $size: Int) {
    shipments(page: $page, size: $size) {
      id
      name
      shipmentClass
      age
      attendance
      subjects
    }
  }
`;
