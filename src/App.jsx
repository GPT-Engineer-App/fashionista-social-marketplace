import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Monetization from "./pages/Monetization.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/monetization" element={<Monetization />} />
      </Routes>
    </Router>
  );
}

export default App;
