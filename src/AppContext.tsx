import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";

interface AppContextType {
  selectedContinent?: string;
  setSelectedContinent: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  selectedCountry?: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
}
interface AppProviderProps {
  children: ReactNode;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedContinent, setSelectedContinent] = useState<
    string | undefined
  >();
  const [selectedCountry, setSelectedCountry] = useState<string>();

  return (
    <AppContext.Provider
      value={{
        selectedContinent,
        setSelectedContinent,
        selectedCountry,
        setSelectedCountry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within the AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
