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
 
    const onMapClick = (event) => {       
        setPointsArray([...pointsArray, event.latLng]);        
    }
  
    return (
        <LoadScript googleMapsApiKey={credentials.mapsKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}                
                center={center}
                zoom={6}
                onClick={onMapClick}
            >   
                {/* Child components, such as markers, info windows, etc. */}                
                {pointsArray.map((latLng, i) => (<Marker key={i} position={latLng} />))}                
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(Map);
