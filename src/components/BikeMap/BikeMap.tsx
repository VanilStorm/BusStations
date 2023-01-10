import {FC} from "react";
import {GoogleMap, MarkerF, InfoWindow, useJsApiLoader} from "@react-google-maps/api";
import {containerStyles, londonCenter} from "../../settings";
import {IPositions} from "../../types/bikeMap/types";

interface BikeMapProps {
    bikesLocation: IPositions[],
    isLoaded: boolean;
    onLoad: (map: google.maps.Map) => void;
    onUnMount: () => void;
}

export const BikeMap: FC<BikeMapProps> = ({bikesLocation, isLoaded, onLoad, onUnMount}) => {

    if (!isLoaded) return <h2>Map is loading..</h2>

    if (!bikesLocation.length) {
        return <h2>Bike locations is loading...</h2>
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyles}
                center={londonCenter}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnMount}
            >
                {bikesLocation.map(item => {
                    return <MarkerF
                        key={item.commonName}
                        position={{lat: item.lat, lng: item.lon}}
                        icon={{
                            url: (require('../../images/bike.ico')),
                        }}
                    />
                })}
            </GoogleMap>
        </div>
    )
}