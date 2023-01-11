import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import {MapContainer} from "../components/Map/MapContainer";

export const RoutesPage:FC = () => {
    return (
        <Routes>
            <Route path='/bikes-map' element={<MapContainer/>}/>
            <Route path='/underground-stations' element={<MapContainer/>}/>
        </Routes>
    );
}