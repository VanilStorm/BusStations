import React, {FC} from "react";
import {TextField} from "@mui/material";
import style from "./style.module.scss"

interface loginProps {
    handleSubmit: (e: React.SyntheticEvent) => void,
    handleSetUserName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSetPassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
    password: string,
    userName: string,
    isError: boolean,

}

export const LoginForm: FC<loginProps> = ({handleSubmit, handleSetUserName, handleSetPassword,
                                              password, userName, isError }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.form}>
                <h2>Login Form</h2>
                <div className={style.inputs}>
                    <TextField
                        id="outlined-number"
                        label='User name'
                        type="text"
                        error={isError}
                        style={{width: '17%'}}
                        value={userName}
                        onChange={handleSetUserName}
                    />
                </div>
                <div className={style.inputs}>
                    <TextField
                        id="outlined-number"
                        label="Password"
                        type="password"
                        error={isError}
                        style={{width: '17%'}}
                        value={password}
                        onChange={handleSetPassword}
                    />
                </div>

                <div className={style.errorMessage}>{isError && '*Wrong password or username'}</div>

                <div className={style.submitBtn}>
                    <input type='submit' value='Log in'/>
                </div>
            </div>
        </form>
    )
}