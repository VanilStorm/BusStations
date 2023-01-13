import {FC, useEffect, useRef, useState} from "react";
import {Map} from "./Map";
import {useJsApiLoader} from "@react-google-maps/api";
import {useActionsMap} from "../../hooks/useActionsMap";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {IPositions} from "../../types/bikeMap/types";
import {useLocation} from "react-router";

export const MapContainer:FC = () => {
    const {fetchBikesPos, fetchUndergroundStations} = useActionsMap();
    const {bikesLocation, undergroundStations} = useTypeSelector(state => state.mapReducer);
    const [markerLoc, setMarkerLoc] = useState({} as IPositions);
    const location = useLocation();

    useEffect(() => {
        if (!bikesLocation.length) {
            fetchBikesPos()
        }

        if (!undergroundStations.length) {
            fetchUndergroundStations()
        }
    }, [])

    useEffect(() => {
        setMarkerLoc({} as IPositions)
    },[location.pathname])

    const handleCreateInfo = (item: IPositions): void => {
        setMarkerLoc(item);
    }

    const {isLoaded} = useJsApiLoader({
        id:'google-map',
        googleMapsApiKey: 'AIzaSyD4lhPaHDGgOLLJRwsPQUBCSupvdxB_yac',
    });

    //Save map in ref if we want to access the map
    const mapRef = useRef<google.maps.Map | null>(null)

    const onLoad = (map: google.maps.Map): void => {
        mapRef.current = map;
    }

    const onUnMount = (): void => {
        mapRef.current = null;
    }

    return (
        <Map isLoaded={isLoaded} onLoad={onLoad} onUnMount={onUnMount} bikesLocation={bikesLocation}
             undergroundStations={undergroundStations} handleCreateInfo={handleCreateInfo}
             markerLoc={markerLoc}
        />
    )
}