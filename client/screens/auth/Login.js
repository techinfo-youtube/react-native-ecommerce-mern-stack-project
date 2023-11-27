import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputBox from "../../components/Form/InputBox";

//redux hooks
import { login } from "../../redux/features/auth/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useReduxStateHook } from "../../hooks/customeHook";
const Login = ({ navigation }) => {
  const loginImage = "https://fishcopfed.coop/images/login.png";
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  // hooks
  const dispatch = useDispatch();
  // global state

  const loading = useReduxStateHook(navigation, "home");

  // login function
  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }
    dispatch(login(email, password));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      {loading && <Text>loading ...</Text>}
      <InputBox
        placeholder={"Enter You Email"}
        value={email}
        setValue={setEamil}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Enter You Password"}
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Not a user yet ? Please{"  "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("register")}
          >
            Register !
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});
export default Login;
