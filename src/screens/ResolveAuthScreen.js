import { useEffect, useContext } from "react";
import { Context } from "../context/authContext";

const ResolveAuthScreen = () => {
  const { tryLocalLogin } = useContext(Context);
  useEffect(() => {
    tryLocalLogin();
  }, []);
  return null;
};

export default ResolveAuthScreen;
