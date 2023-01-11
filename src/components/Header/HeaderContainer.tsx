import React, {FC, useEffect, useState} from "react";
import {Header} from "./Header";
import {useLocation} from "react-router";

export const HeaderContainer: FC = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (location.pathname === '/bikes-map') {
            setValue(0)
        } else if (location.pathname === '/underground-stations') {
            setValue(1)
        }
    },[location.pathname])


    return <Header value={value} handleChange={handleChange}/>
}