import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['books'],
        queryFn: () => request.get('/books').then((res) => res.data)
    })
}
