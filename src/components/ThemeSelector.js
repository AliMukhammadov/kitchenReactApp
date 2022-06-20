import { useTheme } from "../hooks/useTheme";
import ModeIcon from "../assets/mode_icon.svg";
// styles
import "./ThemeSelector.css";

const navColor = ["#00FFAB", "#2E0249", "#EC9B3B"];

function ThemeSelector() {
  const { changeNavColor, changeMode, mode } = useTheme();

  const handleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          style={
            mode === "dark"
              ? { filter: "invert(100%)" }
              : { filter: "invert(0%)" }
          }
          onClick={handleMode}
          src={ModeIcon}
          alt="Mode Icon"
        />
      </div>
      <div className="theme-buttons">
        {navColor.map((color) => {
          return (
            <div
              onClick={() => {
                changeNavColor(color);
              }}
              style={{ background: color }}
              key={color}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeSelector;
