// import { gql } from "@apollo/client";

// export const ADD_SHIPMENT = gql`
//   mutation AddShipment($input: ShipmentInput!) {
//     addShipment(input: $input) {
//       id
//       name
//       shipmentClass
//       attendance
//     }
//   }
// `;


import { gql } from "@apollo/client";

export const ADD_SHIPMENT = gql`
  mutation AddShipment($input: ShipmentInput!) {
    addShipment(input: $input) {
      id
      name
    }
  }
`;