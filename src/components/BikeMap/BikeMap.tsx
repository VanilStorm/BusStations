import {FC, useRef} from "react";
import {GoogleMap, Marker, InfoWindow, useJsApiLoader} from "@react-google-maps/api";
import {containerStyles, londonCenter} from "../../settings";

interface BikeMapProps {
}

export const BikeMap: FC<BikeMapProps> = ({}) => {
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

    if (!isLoaded) return <h2>Map is loading..</h2>

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyles}
                center={londonCenter}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnMount}
            />
        </div>
    )
}