import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import credentials from "../../credentials";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = {
    lat: 40.4169473,
    lng: -3.7035285,
};



const Map = (props) => {
    const [pointsArray, setPointsArray] = useState([]);
    const [isMarkerShown, setIsMarkerShown] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null)

    const addMarker = (event) => {
        setMarkerPosition(event.latLng);
        setIsMarkerShown(true);
        // console.log(event.latLng);
        // var marker = new Marker({
        //     position: event.latLng,
        //     map: GoogleMap
        // })
        // console.log(marker);
        // setPointsArray([...pointsArray, event.latLng]);        
    }
    

    return (
        <LoadScript googleMapsApiKey={credentials.mapsKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}                
                center={center}
                zoom={6}
                onClick={addMarker}
            >   
                {/* Child components, such as markers, info windows, etc. */}
                {isMarkerShown && <Marker position={markerPosition} />}
                {/* {pointsArray.map((item) => {           
                    console.log(pointsArray);         
                    return <Marker key={item.id} position={item.position}/>;
                })} */}

            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(Map);
