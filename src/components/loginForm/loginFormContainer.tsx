import React, {FC} from "react";
import {LoginForm} from "./LoginForm";

export const LoginFormContainer: FC = () => {

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }

    return <LoginForm handleSubmit={handleSubmit}/>;
}