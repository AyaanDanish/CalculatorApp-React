import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const commonProps = {
  fontSize: "30pt",
  fontWeight: "300",
  borderRadius: "50%",
  border: "none",
  boxShadow: "none",
  transition: "0.15s",
};

export const PrimaryButton = styled(Button)(({ theme }) => ({
  ...commonProps,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    borderRadius: "25px",
    filter: "brightness(1.5)",
    backgroundColor: theme.palette.primary.main,
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  ...commonProps,
  backgroundColor: theme.palette.primary.blue,
  "&:hover": {
    borderRadius: "25px",
    filter: "brightness(1.5)",
    backgroundColor: theme.palette.primary.blue,
  },
}));

export const TertiaryButton = styled(Button)(({ theme }) => ({
  ...commonProps,
  backgroundColor: theme.palette.primary.darkBlue,
  "&:hover": {
    borderRadius: "25px",
    filter: "brightness(1.5)",
    backgroundColor: theme.palette.primary.darkBlue,
  },
}));
