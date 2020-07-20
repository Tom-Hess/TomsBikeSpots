import React from 'react';

export default class GetDirections extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="directions">
                <img className="googleMapsImage" src={require('./images/google-maps-icon.png')} width="20" height="20"></img> 
                <a href={'http://maps.google.com/maps?q=' + this.props.coordinates[0] + '+' + this.props.coordinates[1] }>Get Directions</a>
            </div>
        )
    }
}