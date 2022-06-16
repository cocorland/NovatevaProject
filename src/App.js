import { MainPage } from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserProvider'
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/messenger" element={<MainPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
