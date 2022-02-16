import "./App.css";
import Header from "./Components/Header";
import WeatherContainer from "./Components/WeatherContainer";

function App() {
  return (
    <div className="container">
      <Header />
      <br />
      <WeatherContainer />

      <main></main>
    </div>
  );
}

export default App;
