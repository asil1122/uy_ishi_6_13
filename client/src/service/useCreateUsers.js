import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { saveState } from "../config/store";

export const useCreateUsers = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("userData", data);
    },
    onError: () => {
    },
  });
};
