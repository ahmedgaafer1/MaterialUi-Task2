import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, m: "auto", height: 420, display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 40 }}>
          {product.description}
        </Typography>
        <Typography variant="h5" sx={{ my: 1 }}>
          ${product.price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: "auto" }}>
          <Button variant="contained" startIcon={<ShoppingCartIcon />}>
            ADD TO CART
          </Button>
          <Rating value={product.rating} precision={0.5} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
}
export default ProductCard;