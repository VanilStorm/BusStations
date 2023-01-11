import {FC} from "react";
import {GoogleMap, MarkerF} from "@react-google-maps/api";

import {containerStyles, londonCenter} from "../../style/mapStyles/settings";
import {IPositions} from "../../types/bikeMap/types";
import {useLocation} from "react-router";
import mapStyles from "../../style/mapStyles/mapStyles";

interface BikeMapProps {
    bikesLocation: IPositions[],
    undergroundStations: IPositions[],
    isLoaded: boolean;
    onLoad: (map: google.maps.Map) => void;
    onUnMount: () => void;
}

export const Map: FC<BikeMapProps> = ({bikesLocation, isLoaded,
                                          onLoad, onUnMount, undergroundStations}) => {
    const location = useLocation();

    if (!isLoaded) return <h2>Map is loading...</h2>

    if (!bikesLocation.length) return <h2>locations is loading...</h2>

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyles}
                options={{styles: mapStyles}}
                center={londonCenter}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnMount}
            >

                {location.pathname === '/underground-stations'
                    ?
                undergroundStations.map((item: IPositions) => {
                    return <MarkerF position={{lat: item.lat, lng: item.lon}} key={item.commonName}/>
                }) :
                location.pathname === '/bikes-map' ? bikesLocation.map(item => {
                    return <MarkerF
                        key={item.commonName}
                        position={{lat: item.lat, lng: item.lon}}
                        icon={{
                            url: (require('../../images/bike.ico')),
                        }}
                    />
                }) :
                null}
            </GoogleMap>
        </div>
    )
}