import { MapContainer, TileLayer } from "react-leaflet";

function MapView() {
  return (
    <div style={{ height: "400px" }}>
      <MapContainer center={[28.6139, 77.2090]} zoom={13}>
        <TileLayer
  url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=YOUR_TOKEN"
/>


      </MapContainer>
    </div>
  );
}

export default MapView;