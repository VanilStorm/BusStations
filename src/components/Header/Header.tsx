import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Tab, Tabs} from "@mui/material";

interface HeaderProps {
    value: number;
    handleChange: (event: React.SyntheticEvent,newValue: number) => void;
}

export const Header: FC<HeaderProps> = ({value,handleChange}) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab onClick={() => navigate('/bikes-map')} label="Bikes location"/>
                <Tab onClick={() => navigate('/no')} label="Item Two" />
                <Tab onClick={() => navigate('/path')} label="Item Three" />
                <Tab onClick={() => navigate('/four')} label="Item Four" />
            </Tabs>
        </Box>
    );
}