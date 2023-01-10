import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import {BikeMapContainer} from "../components/BikeMap/BikeMapContainer";

export const RoutesPage:FC = () => {
    return (
        <Routes>
            <Route path='/bikes-map' element={<BikeMapContainer/>}/>
        </Routes>
    );
}