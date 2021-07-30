import AsyncStorage from "@react-native-async-storage/async-storage";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { token: action.payload, errorMessage: "" };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

// similar function to sign up and sign in just removed return statement and inline function for shorter syntax
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const tryLocalLogin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token); // Iss i nthis line needs to check and resolved
      //   console.log(response.data);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      //   console.log(err.response.data);
      dispatch({
        type: "add_error",
        payload: err.response.data.error, // err.response.data
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      //   console.log(err.response.data.error);
      dispatch({
        type: "add_error",
        payload: err.response.data.error, // err.response.data.error
      });
    }
  };
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalLogin },
  { token: "", errorMessage: "" }
);
