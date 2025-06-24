import React from "react";
import { Box, Button, Stack } from "@mui/material";

const categories = [
  "SMARTPHONES",
  "LAPTOPS",
  "FRAGRANCES",
  "SKINCARE",
  "GROCERIES",
  "HOME-DECORATION",
  "Reset-Filter",
];

function CategoryFilter() {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      sx={{ my: 4, flexWrap: "wrap" }}
    >
      {categories.map((cat) => (
        <Button
          key={cat}
          variant="outlined"
          sx={{ fontWeight: "bold", minWidth: 150 }}
        >
          {cat}
        </Button>
      ))}
    </Stack>
  );
}
export default CategoryFilter;
