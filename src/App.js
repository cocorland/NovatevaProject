import { MainPage } from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/messenger" element={<MainPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
