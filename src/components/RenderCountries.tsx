import { GET_COUNTRIES } from "../gql-queries";
import { useQuery } from "@apollo/client";
import { useAppContext } from "../AppContext";
import { GetCountriesQuery } from "../gql/graphql";

export default function RenderCountries() {
  const { selectedContinent, setSelectedCountry } = useAppContext();
  const {
    loading: countriesLoading,
    error: countriesError,
    data: countries,
  } = useQuery<GetCountriesQuery>(GET_COUNTRIES, {
    variables: { code: selectedContinent },
    skip: !selectedContinent, 
  });

  return (
    <div className="grid-container">
      {countriesLoading? (
        <span>Loading</span>
      ) : (
       countries  && countries.continent?.countries.map((item: any) => {
          return (
            <div
              className="grid-item"
              key={item.code}
              onClick={() => {
                setSelectedCountry(item.code);
              }}
            >
              <span>{item.name + " " + item.emoji}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
