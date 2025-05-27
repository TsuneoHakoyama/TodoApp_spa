import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import * as api from "../api/AuthAPI";
import { useAuth } from "../hooks/AuthContext";

export const useUser = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: api.getUsers,
    });
}

export const useLogin = () => {
    const { setIsAuth } = useAuth();

    return useMutation({
        mutationFn: api.login,
        onSuccess: (user) => {
            if (user) {
                setIsAuth(true);
            }
        },
        onError: () => {
            toast.error("ログインに失敗しました");
        }
    });
}

export const useLogout = () => {
    const { setIsAuth } = useAuth();

    return useMutation({
        mutationFn: api.logout,
        onSuccess: (user) => {
            if (user) {
                setIsAuth(false);
            }
        },
        onError: () => {
            toast.error("ログアウトに失敗しました");
        }
    });
}
