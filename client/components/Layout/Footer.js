import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useReduxStateHook } from "../../hooks/customeHook";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/userActions";
const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loading = useReduxStateHook(navigation, (path = "login"));
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("home")}
      >
        <AntDesign
          style={[styles.icon, route.name === "home" && styles.active]}
          name="home"
        />
        <Text style={[styles.iconText, route.name === "home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("notifications")}
      >
        <AntDesign
          style={[styles.icon, route.name === "notifications" && styles.active]}
          name="bells"
        />
        <Text
          style={[
            styles.iconText,
            route.name === "notifications" && styles.active,
          ]}
        >
          notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("account")}
      >
        <AntDesign
          style={[styles.icon, route.name === "account" && styles.active]}
          name="user"
        />
        <Text
          style={[styles.iconText, route.name === "account" && styles.active]}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("cart")}
      >
        <AntDesign
          style={[styles.icon, route.name === "cart" && styles.active]}
          name="shoppingcart"
        />
        <Text style={[styles.iconText, route.name === "cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => {
          dispatch(logout());
        }}
      >
        <AntDesign style={styles.icon} name="logout" />
        <Text style={styles.iconText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: "#000000",
  },
  iconText: {
    color: "#000000",
    fontSize: 10,
  },
  active: {
    color: "blue",
  },
});
export default Footer;
