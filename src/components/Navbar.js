import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
//styles
import "./Navbar.css";

function Navbar() {
  const { color, changeNavColor } = useTheme();
  return (
    <div
      onClick={() => {
        changeNavColor("#333");
      }}
      className="navbar"
      style={{ background: color }}
    >
      <nav>
        <Link to="/" className="brand">
          Cooking Kitchen
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
