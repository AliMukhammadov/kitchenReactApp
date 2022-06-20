import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
