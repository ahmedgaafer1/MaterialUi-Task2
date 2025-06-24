import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function StoreHeader() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(45deg, #ffffff, #90caf9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Roboto Slab', serif",
            letterSpacing: 2,
          }}
        >
          MySTORE
        </Typography>

        {/* Buttons & Icons */}
        <Box>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            STORE
          </Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            LOGIN
          </Button>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <DarkModeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default StoreHeader;
