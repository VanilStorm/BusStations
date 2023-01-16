import React, {FC, useEffect, useState} from "react";
import {LoginForm} from "./LoginForm";
import {useDispatch} from "react-redux";
import {loginAction} from "../../store/actions/login";

export const LoginFormContainer: FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [userPassword, setPassword] = useState<string>('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage['admin']) {
            localStorage.setItem('admin',JSON.stringify({user: 'admin', password: 'admin1'}));
        }
    },[])

    const handleSubmit = (e: React.SyntheticEvent) => {
        const {user, password} = JSON.parse(localStorage.getItem('admin') || '');

        if (user === userName && password === userPassword) {
            localStorage.setItem('isLogin', JSON.stringify(true))
            dispatch(loginAction(true))
        }

        e.preventDefault();
    }

    const handleSetUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return <LoginForm handleSubmit={handleSubmit} handleSetUserName={handleSetUserName}
                      handleSetPassword={handleSetPassword} userName={userName} password={userPassword}
    />;
}