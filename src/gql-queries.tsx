import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      code
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emoji
        code
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      code
      currencies
      emoji
      capital
      languages {
        name
      }
    }
  }
`;
