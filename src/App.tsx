import "./App.css";
import RenderContinents from "./components/RenderContinents";
import RenderCountries from "./components/RenderCountries";
import CountryModal from "./components/CountryModal";
function App() {
  return (
    <>
      <RenderContinents/>
      <RenderCountries/>
      <CountryModal/>
    </>
  );
}

export default App;
