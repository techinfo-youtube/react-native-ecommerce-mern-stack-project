import { View, Text } from "react-native";
import React from "react";
import ProductsCard from "./ProductsCard";
import { ProductsData } from "../../data/ProductsData";

const Products = () => {
  return (
    <View>
      {ProductsData.map((p) => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </View>
  );
};

export default Products;
