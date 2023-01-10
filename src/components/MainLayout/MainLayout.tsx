import React, {FC} from "react";
import {HeaderContainer} from "../Header/HeaderContainer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <HeaderContainer/>
            {children}
        </div>
    )
}