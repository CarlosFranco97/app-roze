import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const pathCoordinates = [
  [6.200, -75.575], // Example coords
  [6.300, -75.500]
];

const DriversMap = ({ arrow }) => {
  return (
    <MapContainer center={[6.250, -75.537]} zoom={13} style={{ height: '73vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Polyline positions={pathCoordinates} />
      {arrow && <Marker position={pathCoordinates[0]} />}
    </MapContainer>
  );
};

export default DriversMap;
