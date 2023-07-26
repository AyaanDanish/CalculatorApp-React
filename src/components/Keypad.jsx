/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./CustomButtons.jsx";

const Keypad = ({ handleClick }) => {
  const primaryButtonData = [
    { label: "0", gridArea: "zero" },
    { label: "1", gridArea: "one" },
    { label: "2", gridArea: "two" },
    { label: "3", gridArea: "three" },
    { label: "4", gridArea: "four" },
    { label: "5", gridArea: "five" },
    { label: "6", gridArea: "six" },
    { label: "7", gridArea: "seven" },
    { label: "8", gridArea: "eight" },
    { label: "9", gridArea: "nine" },
    { label: ".", gridArea: "dot" },
    { label: "⌫", gridArea: "del" },
  ];

  const secondaryButtonData = [
    { label: "(", gridArea: "open" },
    { label: ")", gridArea: "close" },
    { label: "÷", gridArea: "div" },
    { label: "×", gridArea: "mul" },
    { label: "-", gridArea: "minus" },
    { label: "+", gridArea: "plus" },
  ];

  const tertiaryButtonData = [
    { label: "AC", gridArea: "ac" },
    { label: "=", gridArea: "equals" },
  ];

  return (
    <Box id="keypad">
      {/* Digits */}
      {primaryButtonData.map((button) => (
        <PrimaryButton
          key={button.label}
          variant="contained"
          sx={{ gridArea: button.gridArea }}
          onClick={handleClick}
        >
          {button.label}
        </PrimaryButton>
      ))}

      {/* Special Characters */}
      {secondaryButtonData.map((button) => (
        <SecondaryButton
          key={button.label}
          variant="contained"
          sx={{ gridArea: button.gridArea }}
          onClick={handleClick}
        >
          {button.label}
        </SecondaryButton>
      ))}

      {/* AC and Equals */}
      {tertiaryButtonData.map((button) => (
        <TertiaryButton
          key={button.label}
          variant="contained"
          sx={{ gridArea: button.gridArea }}
          onClick={handleClick}
        >
          {button.label}
        </TertiaryButton>
      ))}
    </Box>
  );
};

export default Keypad;
