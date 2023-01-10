import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import {BikeMap} from "../components/BikeMap/BikeMap";

export const RoutesPage:FC = () => {
    return (
        <Routes>
            <Route path='*' element={<BikeMap/>}/>
            <Route path='/bikes-map' element={<BikeMap/>}/>
        </Routes>
    );
}