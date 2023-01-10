import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import Test from "../components/test";

export const RoutesPage:FC = () => {
    return (
        <Routes>
            <Route path='*' element={<Test/>}/>
        </Routes>
    );
}