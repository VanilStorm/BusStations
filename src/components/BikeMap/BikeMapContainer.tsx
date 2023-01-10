import {FC, useEffect, useRef} from "react";
import {BikeMap} from "./BikeMap";
import {useJsApiLoader} from "@react-google-maps/api";
import {fetchBikesPos} from "../../store/actions/bikeMap";
import {useActions} from "../../hooks/useActions";
import {useTypeSelector} from "../../hooks/useTypeSelector";

export const BikeMapContainer:FC = () => {
    const {fetchBikesPos} = useActions();
    const {bikesLocation} = useTypeSelector(state => state.bikeMapReducer);

    useEffect(() => {
        if (!bikesLocation.length) {
            fetchBikesPos()
        }
    }, [])

    const {isLoaded} = useJsApiLoader({
        id:'google-bike-map',
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
        <BikeMap isLoaded={isLoaded} onLoad={onLoad} onUnMount={onUnMount} bikesLocation={bikesLocation}/>
    )
}