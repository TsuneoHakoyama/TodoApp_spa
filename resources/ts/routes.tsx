import React, { useEffect } from "react";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";

import { Index } from './pages/tasks/index';
import { Login } from "./pages/login/login";
import { Help } from "./pages/help/help";
import { useLogout, useUser } from "./queries/AuthQuery";
import { useAuth } from "./hooks/AuthContext";
import { PageNotFound } from "./pages/notfound/notfound";

export const Router: React.FC = () => {
    const logout = useLogout();
    const { isAuth, setIsAuth } = useAuth();
    const { isLoading, data: authUser } = useUser();

    useEffect(() => {
        if (authUser) {
            setIsAuth(true)
        }
    }, [authUser])
    
    const navigation = (
        <header className="global-head">
                <div>
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/help">ヘルプ</Link></li>
                        <li onClick={() => logout.mutate()}><span>ログアウト</span></li>
                    </ul>
                </div>
        </header>
    )

    const loginNavigation = (
        <header className="global-head">
                <div>
                    <ul>
                        <li><Link to="/help">ヘルプ</Link></li>
                        <li><Link to="/login">ログイン</Link></li>
                    </ul>
                </div>
        </header>
    )


    if (isLoading) return <div className="loader"></div>

    return (
        <BrowserRouter>
            { isAuth ? navigation : loginNavigation }
            <Routes>
                <Route path="/" element={ isAuth ? <Index /> : <Navigate to="/login" /> } />
                <Route path="/login" element={ isAuth ? < Navigate to="/" /> : <Login /> } />
                <Route path="/help" element={<Help />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}