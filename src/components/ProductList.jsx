import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
const products = [
  {
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    image: img1,
    rating: 4.5,
  },
  {
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    image: img2,
    rating: 4.5,
  },
  {
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
];

function ProductList() {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {products.map((product, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
export default ProductList;
