import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Monetization from "./pages/Monetization.jsx";
import AIEditing from "./pages/AIEditing.jsx";
import Collaboration from "./pages/Collaboration.jsx";
import Discovery from "./pages/Discovery.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/monetization" element={<Monetization />} />
      <Route path="/ai-editing" element={<AIEditing />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/discovery" element={<Discovery />} />
      </Routes>
    </Router>
  );
}

export default App;
