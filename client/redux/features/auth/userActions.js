import { server } from "../../store";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// action login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });
    // hitting node login api request
    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "logingSucess",
      payload: data,
    });
    await AsyncStorage.setItem("@auth", data?.token);
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};
// register action
export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });
    // hitapi register
    const { data } = await axios.post(`${server}/user/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "registerSucess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "registerFail",
      payload: error.response.data.message,
    });
  }
};

// GET USER DATTA ACTION\
export const getUserData = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUserDataRequest",
    });
    // hitting node login api request
    const { data } = await axios.post(`${server}/user/profile`);
    dispatch({
      type: "getUserDataSucess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "getUserDataFail",
      payload: error.response.data.message,
    });
  }
};
// LOGOUT ACTION
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    // hitting node login api request
    const { data } = await axios.get(`${server}/user/logout`);
    dispatch({
      type: "logoutSucess",
      payload: data?.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
