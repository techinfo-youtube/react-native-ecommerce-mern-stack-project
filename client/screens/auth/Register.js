import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";
import { useDispatch } from "react-redux";
import { register } from "../../redux/features/auth/userActions";
import { useReduxStateHook } from "./../../hooks/customeHook";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const loginImage = "https://fishcopfed.coop/images/login.png";
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [country, setCountry] = useState("india");

  // login function
  const handleRegister = () => {
    // validation
    if (!email || !password || !name || !address || !city || !phone) {
      return alert("Please provide all fields client side");
    }
    const formData = {
      email,
      password,
      name,
      address,
      city,
      phone,
      answer,
      country: "India",
    };
    dispatch(register(formData));
    // navigation.navigate("/login");
  };
  const loading = useReduxStateHook(navigation, "login");
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />

      <InputBox
        placeholder={"Enter You Name"}
        value={name}
        setValue={setName}
        autoComplete={"name"}
      />
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
      <InputBox
        placeholder={"Enter You address"}
        value={address}
        setValue={setAddress}
        autoComplete={"address-line1"}
      />
      <InputBox
        placeholder={"Enter You city"}
        value={city}
        setValue={setCity}
        autoComplete={"country"}
      />
      <InputBox
        placeholder={"Enter You contact no"}
        value={phone}
        setValue={setPhone}
        autoComplete={"name"}
      />
      <InputBox
        placeholder={"Enter You favrite dish"}
        value={answer}
        setValue={setAnswer}
        autoComplete={"name"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Alredy a user please ?{"  "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("login")}
          >
            login !
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
export default Register;
