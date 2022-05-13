import { MainPage } from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
