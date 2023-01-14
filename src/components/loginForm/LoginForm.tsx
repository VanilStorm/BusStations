import React, {FC} from "react";
import {Button, TextField} from "@mui/material";
import style from "./style.module.scss"

interface loginProps {
    handleSubmit: (e: React.SyntheticEvent) => void
}

export const LoginForm: FC<loginProps> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.form}>
                <h2>Login Form</h2>
                <div className={style.inputs}>
                    <TextField
                        id="outlined-number"
                        label="User name"
                        type="text"
                        style={{width: '17%'}}
                    />
                    {/*{renderErrorMessage("uname")}*/}
                </div>
                <div className={style.inputs}>
                    <TextField
                        id="outlined-number"
                        label="Password"
                        type="password"
                        style={{width: '17%'}}
                    />
                    {/*{renderErrorMessage("pass")}*/}
                </div>
                <div className={style.submitBtn}>
                    <input type='submit' value='Submit'/>
                </div>
            </div>
        </form>
    )
}