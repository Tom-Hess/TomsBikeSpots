import React from 'react';
import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import GetDirections from './GetDirections.js';


export default class BikeSpotMarker extends React.Component {
    constructor(props) {
        super(props);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getDescription = this.getDescription.bind(this);
    }

    getImage(imageName) {
        return new L.Icon({
            iconUrl: require('./images/' + imageName),
            iconSize: new L.Point(30, 30),
            className: 'bikeIcon'
        });
    }

    getCoordinates(name) {
        switch(name) {
            case 'marshCreek':
                return [40.064532, -75.731558]
            case 'frenchCreek':
                return [40.198213, -75.8650549]
            case 'lakeNockamixon':
                return [40.483256, -75.183733]
            case 'lumsPond':
                return [39.552359, -75.711604]
            case 'whiteClay':
                return [39.7151836,-75.7307132]
            case 'gloucester':
                return [39.777513,-75.0378727]
        }
    }

    getDescription(name) {
        switch(name) {
            case 'marshCreek':
                return "Marsh Creek"
            case 'frenchCreek':
                return "French Creek"
            case 'lakeNockamixon':
                return "Lake Nockamixon"
            case 'lumsPond':
                return "Lums Pond"
            case 'whiteClay':
                return "White Clay"
            case 'gloucester':
                return "Gloucester"
        }
    }

    render() {

    return (
        <Marker id={this.props.name + "Marker"} icon={this.getImage(this.props.name + '.png')} position={this.getCoordinates(this.props.name)}>
        <Popup>{this.getDescription(this.props.name)}<br/>
            <GetDirections coordinates={this.getCoordinates(this.props.name)}/>
        </Popup>
        </Marker>
    )
}
}
