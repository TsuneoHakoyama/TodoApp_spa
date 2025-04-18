import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Index } from './components/index';

const root = createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <StrictMode>
        <Index />
    </StrictMode>
);