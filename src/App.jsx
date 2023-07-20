/* eslint-disable no-unused-vars */
import { Box, Container, Typography } from "@mui/material";
import Mexp from "math-expression-evaluator";
import Keypad from "./components/Keypad";
import Display from "./components/Display";
import { useState } from "react";

const math = new Mexp();

const App = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    const input = e.target.innerText;
    if (input === "=") {
      calculateResult(display);
      return;
    }

    setDisplay((prev) =>
      input === "AC"
        ? ""
        : input === "⌫"
        ? prev.slice(0, prev.length - 1)
        : prev + input
    );
  };

  const calculateResult = (currentDisplay) => {
    currentDisplay = currentDisplay.replace("÷", "/").replace("×", "*");
    try {
      const result = math.eval(currentDisplay);
      setDisplay(result.toString());
    } catch (e) {
      setDisplay("");
    }
  };

  return (
    <Container id="app-container">
      <Display display={display} />
      <Keypad setDisplay={setDisplay} handleClick={handleClick} />
    </Container>
  );
};

export default App;
