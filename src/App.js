import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AboutPage from "./Pages/AboutPage";
import CakePage from "./Pages/CakePage";
import CandyBarPage from "./Pages/CandyBarPage";
import HomePage from "./Pages/HomePage";
import MacaroonsPage from "./Pages/MacaroonsPage";
import MiniCakesPage from "./Pages/MiniCakesPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cake" element={<CakePage />} />
        <Route path="/macaroons" element={<MacaroonsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order" element={<PlaceOrderPage />} />
        <Route path="/minicakes" element={<MiniCakesPage />} />
        <Route path="/candybar" element={<CandyBarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
