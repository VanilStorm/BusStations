import React, {FC, useEffect, useState} from "react";
import {HeaderContainer} from "../Header/HeaderContainer";
import style from './style.module.scss';
import {LoginFormContainer} from "../loginForm/loginFormContainer";
import {useTypeSelector} from "../../hooks/useTypeSelector";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
    const {isUserLogin} = useTypeSelector(state => state.loginReducer);
    const [isLog, setIsLog] = useState(false);

    useEffect(() => {
        if (!localStorage['isLogin']) {
            localStorage.setItem('isLogin',JSON.stringify(false));

        }

        if (localStorage['isLogin']) {
            const isLogin = JSON.parse(localStorage.getItem('isLogin') || '');
            setIsLog(isLogin)
        }

    },[isUserLogin])


    if (!isLog) {
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