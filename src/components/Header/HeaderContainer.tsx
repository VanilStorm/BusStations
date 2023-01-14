import React, {FC, useEffect, useState} from "react";
import {Header} from "./Header";
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";

export const HeaderContainer: FC = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/bikes-map')
    },[])

    useEffect(() => {
        if (location.pathname === '/bikes-map') {
            setValue(0)
        } else if (location.pathname === '/underground-stations') {
            setValue(1)
        } else if (location.pathname === '/bus-arrival') {
            setValue(2)
        }
    },[location.pathname])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return <Header value={value} handleChange={handleChange}/>
}