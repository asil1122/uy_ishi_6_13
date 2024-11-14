import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useSearch = (input = '') => {
  return useQuery({
    queryKey: ["Search", input],
    queryFn: () =>
      request
        .get("/books", {
          params: {
            title_like: input ? input : "00000",
          },
        })
        .then((res) => res.data),
  });
};
