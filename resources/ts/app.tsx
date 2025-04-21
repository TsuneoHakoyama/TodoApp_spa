import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Nav } from './components/routes';
import { Index } from './components/tasks/index';
import { Login } from "./components/login/login";
import { Help } from "./components/help/help";

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}

