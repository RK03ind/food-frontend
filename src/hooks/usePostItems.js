import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const usePostItems = (url, isTokenRequired = false) => {
  const authCtx = useContext(AuthContext);
  return useMutation({
    mutationFn: async (data) => {
      if (!isTokenRequired) {
        return await axios.post(url, data);
      } else {
        return await axios.post(url, data, {
          headers: {
            "x-auth-token": isTokenRequired ? authCtx.token : "",
          },
        });
      }
    },

    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostItems;
