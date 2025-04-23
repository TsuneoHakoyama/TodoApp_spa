import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Index } from './tasks/index';
import { Login } from "./login/login";
import { Help } from "./help/help";

export const Nav: React.FC = () => {
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
};