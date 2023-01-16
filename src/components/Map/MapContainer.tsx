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

    //At the first render we get the data we need
    useEffect(() => {
        if (!bikesLocation.length) {
            fetchBikesPos()
        }

        if (!undergroundStations.length) {
            fetchUndergroundStations()
        }
    }, [])

    //Deleting a marker after a transition
    useEffect(() => {
        setMarkerLoc({} as IPositions)
    },[location.pathname])

    //Creating a marker info
    const handleCreateInfo = (item: IPositions): void => {
        setMarkerLoc(item);
    }

    const randomBikeImg = ():string => {
        const img = [
            'https://afisha.london/wp-content/uploads/2019/09/Foto-Daniel-Jones.png',
            'https://cdn.the-village.ru/the-village.ru/post_image-image/Wno8JEiblNPubQHHaVccDA-article.jpg',
            'https://pytrip.ru/wp-content/uploads/2014/11/IMG_3749%D0%B0.jpg',
            'https://www.urbanoid.by/files/mag/9m2GnODgO1__l.jpg',
            'https://www.urbanoid.by/files/mag/geddgRMjBr__l.jpg'
        ];

        return img[Math.floor(Math.random() * img.length)];
    }

    //Checking if the map has loaded
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
             markerLoc={markerLoc} randomBikeImg={randomBikeImg}
        />
    )
}