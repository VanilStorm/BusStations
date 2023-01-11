import {FC} from "react";
import {GoogleMap, InfoWindow, MarkerF} from "@react-google-maps/api";

import {containerStyles, londonCenter} from "../../style/mapStyles/settings";
import {IPositions} from "../../types/bikeMap/types";
import {useLocation} from "react-router";
import mapStyles from "../../style/mapStyles/mapStyles";

interface BikeMapProps {
    bikesLocation: IPositions[],
    undergroundStations: IPositions[],
    markerLoc: IPositions,
    isLoaded: boolean;
    handleCreateInfo: (item: IPositions) => void;
    onLoad: (map: google.maps.Map) => void;
    onUnMount: () => void;
}

export const Map: FC<BikeMapProps> = ({bikesLocation, isLoaded,
                                          onLoad, onUnMount, undergroundStations,
                                          handleCreateInfo, markerLoc}) => {
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
                    return <MarkerF position={{lat: item.lat, lng: item.lon}}
                                    key={item.commonName}
                                    icon={{
                                        url: (require('../../images/metro.ico')),
                                        scaledSize: new window.google.maps.Size(20,20)
                                    }}
                                    onClick={() => handleCreateInfo(item)}
                    />
                }) :
                location.pathname === '/bikes-map' ? bikesLocation.map(item => {
                    return <MarkerF
                        key={item.commonName}
                        position={{lat: item.lat, lng: item.lon}}
                        icon={{
                            url: (require('../../images/bike.ico')),
                            scaledSize: new window.google.maps.Size(15,15)
                        }}
                    />
                }) :
                null}

                {markerLoc.commonName && <InfoWindow
                    position={{lat:markerLoc.lat, lng: markerLoc.lon}}
                    onCloseClick={() => handleCreateInfo({} as IPositions)}
                >
                    <div>
                        <h2>{markerLoc.commonName}</h2>
                    </div>
                </InfoWindow>}
            </GoogleMap>
        </div>
    )
}