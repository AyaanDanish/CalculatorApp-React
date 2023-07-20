/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const Display = ({ display }) => {
  return (
    <Box
      id="display"
      sx={{ bgcolor: "primary.darkBlue", color: "primary.white" }}
    >
      <Typography variant="h1">{display}</Typography>
    </Box>
  );
};

export default Display;
