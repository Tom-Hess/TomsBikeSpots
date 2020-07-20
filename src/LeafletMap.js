import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import "./App.css";
import GetDirections from './GetDirections.js';

function getImage(imageName) {
    return new L.Icon({
        iconUrl: require('./images/' + imageName),
        iconSize: new L.Point(30, 30),
        className: 'bikeIcon'
    });
}
export default function LeafletMap() {
    const marshCreekPosition = [40.064532, -75.731558];
    const frenchCreekPosition= [40.198213, -75.8650549];
    const nockamixonPosition = [40.483256, -75.183733];
    const lumsPondPosition = [39.5540226, -75.7164015];
    const whiteClayPosition = [39.7151836,-75.7307132];
    const gloucesterPosition = [39.7788073,-75.1181506];
    const bikerIconImage = new L.Icon({
        iconUrl: require('./images/bikeIcon2.png'),
        iconSize: new L.Point(30, 30),
        className: 'bikeIcon'
    });
  return (
    <Map center={[39.7560479,-75.564676]} zoom={8}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    <Marker id="marshCreek" icon={getImage('marsh.png')} position={marshCreekPosition}>
      <Popup>Marsh Creek<br/>
          <GetDirections coordinates={marshCreekPosition}/>
      </Popup>
    </Marker>
    <Marker id="frenchCreek" icon={getImage('fc.png')} position={frenchCreekPosition}>
      <Popup>French Creek<br/>
          <GetDirections coordinates={frenchCreekPosition}/>
      </Popup>
    </Marker>
    <Marker id="nockamixon" icon={getImage('nockamixon.png')} position={nockamixonPosition}>
      <Popup>Lake Nockamixon
        <GetDirections coordinates={nockamixonPosition} />
      </Popup>
    </Marker>
    <Marker id="lums" icon={getImage('lums.png')} position={lumsPondPosition}>
      <Popup>Lums Pond
        <GetDirections coordinates={lumsPondPosition}/>
      </Popup>
    </Marker>
    <Marker id="whiteClay" icon={getImage('wc.png')} position={whiteClayPosition}>
      <Popup>White Clay
        <GetDirections coordinates={whiteClayPosition}/>
      </Popup>
    </Marker>
    <Marker id="gloucester" icon={getImage('glou.png')} position={gloucesterPosition}>
      <Popup>Gloucester
        <GetDirections coordinates={gloucesterPosition}/>
      </Popup>
    </Marker>

    </Map>
  );
}