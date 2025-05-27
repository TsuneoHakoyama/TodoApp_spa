import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { isAxiosError } from "axios"

import * as api from "../api/TaskAPI";

export const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: api.getTasks,
    });
}

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: api.createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success("新しいタスクを登録しました");
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response?.data.errors) {
                Object.values(error.response.data.errors).map((messages: any) => {
                    messages.map((message: string) => {
                        toast.error(message);
                    });
                });
            } else {
                toast.error("登録に失敗しました");
            }
        }
    });
}

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: api.updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success("タスクを更新しました");
        },
        onError: (error) => {
            if (isAxiosError(error) && error.response?.data.errors) {
                Object.values(error.response.data.errors).map((messages: any) => {
                    messages.map((message: string) => {
                        toast.error(message);
                    });
                });
            } else {
                toast.error("更新に失敗しました");
            }
        }
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

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: api.deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success("タスクを削除しました");
        },
        onError: () => {
            toast.error("削除に失敗しました");
        }
    });
}