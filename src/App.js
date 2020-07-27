import React from 'react';
import './App.css';
import LeafletMap from './LeafletMap';
function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <div className="leaflet-map">
        <h1 className="bikingSpotsHeader">Tom's Biking Spots</h1>
        <LeafletMap/>
      </div>
    </div>
  );
}

export default App;
