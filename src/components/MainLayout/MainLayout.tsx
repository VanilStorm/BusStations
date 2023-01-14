import React, {FC} from "react";
import {HeaderContainer} from "../Header/HeaderContainer";
import style from './style.module.scss';
import {LoginFormContainer} from "../loginForm/loginFormContainer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {

    if (true) {
        return <LoginFormContainer/>
    }

    return (
        <div>
            <HeaderContainer/>
            <div className={style.container}>
                {children}
            </div>
        </div>
    )
}