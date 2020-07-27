import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import "./App.css";
import BikeSpotMarker from './BikeSpotMarker.js';
export default function LeafletMap() {

    const spots = ['marshCreek', 'frenchCreek', 'lakeNockamixon', 'gloucester', 'whiteClay', 'lumsPond'];
  return (
    <Map center={[39.7560479,-75.564676]} zoom={9}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    {spots.map((value) => {
      return <BikeSpotMarker name={value}/>
    })}

    </Map>
  );
}