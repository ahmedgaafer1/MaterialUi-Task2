import React from "react";
import { Box, Typography } from "@mui/material";

function StoreFooter() {
  return (
    <Box
      sx={{
        bgcolor: "#222",
        color: "#fff",
        py: 3,
        textAlign: "center",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 1300,
      }}
    >
      <Typography variant="body2">
        © 2025 MySTORE. All rights reserved.
      </Typography>
    </Box>
  );
}
export default StoreFooter;
