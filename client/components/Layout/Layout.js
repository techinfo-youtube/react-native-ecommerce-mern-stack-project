import { View, Text, StatusBar } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />
      <Header />
      <View>{children}</View>
      <Footer />
    </>
  );
};

export default Layout;
