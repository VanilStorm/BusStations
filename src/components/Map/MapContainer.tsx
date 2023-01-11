import {FC, useEffect, useRef} from "react";
import {Map} from "./Map";
import {useJsApiLoader} from "@react-google-maps/api";
import {useActions} from "../../hooks/useActions";
import {useTypeSelector} from "../../hooks/useTypeSelector";

export const MapContainer:FC = () => {
    const {fetchBikesPos, fetchUndergroundStations} = useActions();
    const {bikesLocation, undergroundStations} = useTypeSelector(state => state.mapReducer);

    useEffect(() => {
        if (!bikesLocation.length) {
            fetchBikesPos()
            fetchUndergroundStations()
        }
    }, [])

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
             undergroundStations={undergroundStations}/>
    )
}