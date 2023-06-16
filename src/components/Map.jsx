import React, {useState} from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function MapWithClick({onMapClick,preLocation}) {
    console.log(preLocation)
    const [clickedLocation, setClickedLocation] = useState(null);

    function handleMapClick(event) {
        const {latlng} = event;
        const location = {
            latitude: latlng.lat,
            longitude: latlng.lng,
        };
        setClickedLocation(location);
        onMapClick(location);
    }

    return (
        <MapContainer
            center={[preLocation.lat, preLocation.lon]}
            zoom={13}
            onClick={handleMapClick}
            style={{height: "100%", width: "100%"}}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
                <Marker position={[preLocation.lat, preLocation.lon]}>
                    
                </Marker>
        </MapContainer>
    );
}
