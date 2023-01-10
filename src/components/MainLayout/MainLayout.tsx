import React, {FC} from "react";
import {Container} from "@mui/material";
import {HeaderContainer} from "../Header/HeaderContainer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <HeaderContainer/>
            <Container>
                {children}
            </Container>
        </div>
    )
}