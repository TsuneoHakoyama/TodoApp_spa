import { useQuery } from "@tanstack/react-query";
import * as api from "../api/TaskAPI";

export const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: api.getTasks,
    });
}