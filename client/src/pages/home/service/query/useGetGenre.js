import { useQuery } from "@tanstack/react-query";
import { request } from '../../../../config/request';

export const useGetGenre = (selectedGenre = '') => {
  return useQuery({
    queryKey: ["genre", selectedGenre],
    queryFn: () =>
      request.get("/books", {
        params: { genre: selectedGenre }
      }).then((res) => res.data),
  });
};
