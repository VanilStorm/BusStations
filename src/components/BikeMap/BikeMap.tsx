import {FC} from "react";
import {Map, GoogleApiWrapper} from "google-maps-react"

interface BikeMapProps {
    google: string;
}

const BikeMap: FC<BikeMapProps> = ({google}) => {

    return (
       <Map
           google={google}
           style={{width: '100%', height: '100%'}}
           initialCenter={{
               lat: 51.507351,
               lng: -0.127758,
           }}
       />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD4lhPaHDGgOLLJRwsPQUBCSupvdxB_yac'
})(BikeMap)