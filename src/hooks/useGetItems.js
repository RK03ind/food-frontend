import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetItems = (
  url,
  isJWTTokenRequired = false,
  isBearerTokenRequired = false,
  key = "getItems"
) => {
  return useQuery(
    key,
    async () => {
      if (!isJWTTokenRequired && !isBearerTokenRequired) {
        const { data } = await axios.get(url);
        return data;
      } else if (isJWTTokenRequired) {
        const { data } = await axios.get(url, {
          headers: {
            // "x-auth-token": jwt token will go here,
          },
        });
        return data;
      }
    },
    {
      cacheTime: 50000,
      refetchOnWindowFocus: false,
      onError: (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          //Perform some action on error
        }
      },
    }
  );
};

export default useGetItems;
