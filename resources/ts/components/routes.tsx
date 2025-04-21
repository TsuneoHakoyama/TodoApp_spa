import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
    return (
        <header className="global-head">
            <div>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="help">ヘルプ</Link></li>
                    <li><Link to="login">ログイン</Link></li>
                    <li><span>ログアウト</span></li>
                </ul>
            </div>
        </header>
    );
};