import React from "react";
import { useAppContext } from "../AppContext";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../gql-queries";
import { Continents } from "../types";
export default function RenderContinents() {
  const { setSelectedContinent } = useAppContext();

  const {
    loading: continentsLoading,
    error,
    data: continents,
  } = useQuery(GET_CONTINENTS);
  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {continentsLoading ? (
        <span>Loading continents...</span>
      ) : (
        continents.continents.map((item: Continents) => {
          return (
            <button
              key={item.code}
              style={{ margin: 2 }}
              onClick={() => {
                setSelectedContinent(item.code);
              }}
            >
              {item.name}
            </button>
          );
        })
      )}
    </div>
  );
}
