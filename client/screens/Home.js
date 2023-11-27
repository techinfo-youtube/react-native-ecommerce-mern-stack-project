import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../redux/features/auth/userActions";

const Home = () => {
  const disptach = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    disptach(getUserData());
  }, [disptach]);

  return (
    <Layout>
      <Header />
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
