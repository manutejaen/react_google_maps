import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
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
    return (
        <LoadScript googleMapsApiKey={credentials.mapsKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}                
                center={center}
                zoom={6}
            >
                {/* Child components, such as markers, info windows, etc. */}

            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(Map);
