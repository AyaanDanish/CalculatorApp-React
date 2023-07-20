/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./CustomButtons.jsx";

const Keypad = ({ handleClick }) => {
  return (
    <Box id="keypad">
      {/* Digits */}
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "seven" }}
        onClick={handleClick}
      >
        7
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "eight" }}
        onClick={handleClick}
      >
        8
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "nine" }}
        onClick={handleClick}
      >
        9
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "four" }}
        onClick={handleClick}
      >
        4
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "five" }}
        onClick={handleClick}
      >
        5
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "six" }}
        onClick={handleClick}
      >
        6
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "three" }}
        onClick={handleClick}
      >
        3
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "two" }}
        onClick={handleClick}
      >
        2
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "one" }}
        onClick={handleClick}
      >
        1
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "zero" }}
        onClick={handleClick}
      >
        0
      </PrimaryButton>

      {/* Special Characters */}
      <TertiaryButton
        variant="contained"
        sx={{ gridArea: "ac" }}
        onClick={handleClick}
      >
        AC
      </TertiaryButton>
      <SecondaryButton
        variant="contained"
        sx={{ gridArea: "open" }}
        onClick={handleClick}
      >
        {"("}
      </SecondaryButton>
      <SecondaryButton
        variant="contained"
        sx={{ gridArea: "close" }}
        onClick={handleClick}
      >
        {")"}
      </SecondaryButton>
      <SecondaryButton
        variant="contained"
        sx={{ gridArea: "div" }}
        onClick={handleClick}
      >
        ÷
      </SecondaryButton>
      <SecondaryButton
        variant="contained"
        sx={{ gridArea: "mul" }}
        onClick={handleClick}
      >
        ×
      </SecondaryButton>
      <SecondaryButton
        variant="contained"
        sx={{ gridArea: "plus" }}
        onClick={handleClick}
      >
        +
      </SecondaryButton>
      <SecondaryButton
        variant="contained"
        sx={{ gridArea: "minus" }}
        onClick={handleClick}
      >
        -
      </SecondaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "dot" }}
        onClick={handleClick}
      >
        .
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        sx={{ gridArea: "del" }}
        onClick={handleClick}
      >
        ⌫
      </PrimaryButton>
      <TertiaryButton
        variant="contained"
        sx={{ gridArea: "equals" }}
        onClick={handleClick}
      >
        =
      </TertiaryButton>
    </Box>
  );
};

export default Keypad;
