
import {graphql} from './gql'
export const GET_CONTINENTS = graphql(`
  query GetContinents {
    continents {
      name
      code
    }
  }
`);

export const GET_COUNTRIES = graphql(`
  query GetCountries($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emoji
        code
      }
    }
  }
`);


export const GET_COUNTRY = graphql(`
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
`);
