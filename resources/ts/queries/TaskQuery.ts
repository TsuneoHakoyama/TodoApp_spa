import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import * as api from "../api/TaskAPI";

export const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: api.getTasks,
    });
}

export const useUpdateDoneTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: api.updateDoneTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
        onError: () => {
            toast.error("更新に失敗しました");
        }
    });
}