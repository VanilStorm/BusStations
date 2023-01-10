import React, {FC, useState} from "react";
import {Header} from "./Header";

export const HeaderContainer: FC = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return <Header value={value} handleChange={handleChange}/>
}