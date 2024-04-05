import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WeatherCard from "./pages/WeatherCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
