import React from "react";
import StoreHeader from "./components/StoreHeader";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import StoreFooter from "./components/StoreFooter";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <StoreHeader />
      <Container maxWidth="lg">
        <CategoryFilter />
        <ProductList />
      </Container>
      <StoreFooter />
    </>
  );
}
export default App;
