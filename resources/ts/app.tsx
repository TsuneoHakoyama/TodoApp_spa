import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { Router } from './routes';

export const App: React.FC = () => {
    
    const queryClient = new QueryClient()
    
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <ToastContainer hideProgressBar={true} />
        </QueryClientProvider>
    );
}