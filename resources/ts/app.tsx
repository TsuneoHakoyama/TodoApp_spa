import React from "react";
import { Nav } from './components/routes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const App: React.FC = () => {
    
    const queryClient = new QueryClient()
    
    return (
        <QueryClientProvider client={queryClient}>
            <Nav />
        </QueryClientProvider>
    );
}