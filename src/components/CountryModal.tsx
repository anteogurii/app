import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../gql-queries";
import { useAppContext } from "../AppContext";
import { GetCountryQuery } from "../gql/graphql";
export default function CountryModal() {
  const { selectedCountry, setSelectedCountry } = useAppContext();
  const {
    loading: countryLoading,
    error: countryError,
    data: country,
  } = useQuery<GetCountryQuery>(GET_COUNTRY, {
    variables: { code: selectedCountry || '' },
    skip: !selectedCountry, 
  });
  return (
    selectedCountry ?  (
      <div
        style={{
          position: "absolute",
          top: 0,
          background: "rgba(0,0,0, 0.3)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ background: "white", padding: 15 }}>
          {country && !countryLoading ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Name: {country.country?.name}</span>
              <span>Capital: {country.country?.capital}</span>
              <span>
                Languages:
                {country.country?.languages.map((language: { name: string }) => {
                  return <span key={language.name}>{language.name}, </span>;
                })}
              </span>
              <span>
                Languages:
                {country.country?.currencies.map((currency: string) => {
                  return <span key={currency}>{currency}, </span>;
                })}
              </span>
              <button
                onClick={() => {
                  setSelectedCountry("");
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <span>loading</span>
          )}
        </div>
      </div>
    ):null
  );
}
