import { useState, useMemo } from "react";
import "./ColorButton.css";
const ColorButton = () => {
  const [bgcolor, setBgcolor] = useState("");
  const handleColor = useMemo(
    () => (color) => {
      setBgcolor(color);
    },
    []
  );
  return (
    <>
      <div className="app-container" style={{ backgroundColor: bgcolor }}>
        <div className="button-container">
          <button
            className="color-button"
            style={{ backgroundColor: "red" }}
            onClick={() => handleColor("red")}
          >
            {" "}
            Red
          </button>
          <button
            className="color-button"
            style={{ backgroundColor: "orange" }}
            onClick={() => handleColor("Orange")}
          >
            {" "}
            Orange
          </button>
          <button
            className="color-button"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => handleColor("Yellow")}
          >
            {" "}
            Yellow
          </button>
          <button
            className="color-button"
            style={{ backgroundColor: "Blue" }}
            onClick={() => handleColor("Blue")}
          >
            {" "}
            Blue
          </button>
          <button
            className="color-button"
            style={{ backgroundColor: "Green" }}
            onClick={() => handleColor("Green")}
          >
            {" "}
            Green
          </button>
          <button
            className="color-button"
            style={{ backgroundColor: "Black", color: "white" }}
            onClick={() => handleColor("Black")}
          >
            {" "}
            Black
          </button>
          <button
            className="color-button"
            style={{ backgroundColor: "White" }}
            onClick={() => handleColor("White")}
          >
            {" "}
            White
          </button>
        </div>
      </div>
    </>
  );
};
export default ColorButton;
