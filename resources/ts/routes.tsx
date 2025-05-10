import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { Index } from './pages/tasks/index';
import { Login } from "./pages/login/login";
import { Help } from "./pages/help/help";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <header className="global-head">
                <div>
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/help">ヘルプ</Link></li>
                        <li><Link to="/login">ログイン</Link></li>
                        <li><span>ログアウト</span></li>
                    </ul>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
}