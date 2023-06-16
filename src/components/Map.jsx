import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function MapWithClick({preLocation}) {
    const [location, setLocation] = useState(preLocation);

    useEffect(() => {
        setLocation(preLocation);
    }, [preLocation]);

    return (
        <MapContainer center={[location.lat, location.lon]} zoom={0} style={{height: "100%", width: "100%"}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[location.lat, location.lon]}></Marker>
        </MapContainer>
    );
}
