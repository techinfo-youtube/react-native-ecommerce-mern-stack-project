import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <Layout>
      <Categories />
      <Banner />
      <Products />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
