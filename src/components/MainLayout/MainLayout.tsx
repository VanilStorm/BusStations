import React, {FC} from "react";
import {HeaderContainer} from "../Header/HeaderContainer";
import style from './style.module.scss';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <HeaderContainer/>
            <div className={style.container}>
                {children}
            </div>
        </div>
    )
}