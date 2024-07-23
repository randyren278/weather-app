"use client";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";

//@ts-ignore
function FlyToActiveCity({ activeCityCords }) {
  const map = useMap();
  useEffect(() => {
    if (activeCityCords) {
      const zoomLev = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo(
        [activeCityCords.lat, activeCityCords.lon],
        zoomLev,
        flyToOptions
      );
    }
  }, [activeCityCords, map]);

  return null;
}
function MapBox() {
  const lat = 41.3828939 || 0;
  const lon = 2.1774322 || 0;

  return (
    <div
      className="flex-1 basis-[50%] border rounded-lg"
      style={{ height: "100%", width: "100%" }}
    >
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={false}
        className="rounded-lg m-4"
        style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default MapBox;
