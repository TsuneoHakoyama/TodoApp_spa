import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { Router } from './routes';
import { AuthProvider } from "./hooks/AuthContext"

export const App: React.FC = () => {
    
    const queryClient = new QueryClient()
    
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Router />
                <ToastContainer hideProgressBar={true} />
            </QueryClientProvider>
        </AuthProvider>
    );
}