import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import Test from "../components/test";
import BikeMap from "../components/BikeMap/BikeMap";

export const RoutesPage:FC = () => {
    return (
        <Routes>
            <Route path='/test' element={<BikeMap/>}/>
        </Routes>
    );
}