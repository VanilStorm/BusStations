import React, {FC} from "react";
import {Box, Tab, Tabs} from "@mui/material";

interface HeaderProps {
    value: number;
    handleChange: (event: React.SyntheticEvent,newValue: number) => void;
}

export const Header: FC<HeaderProps> = ({value,handleChange}) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Box>
    );
}