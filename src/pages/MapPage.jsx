import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapPage({ endereco }) {
  useEffect(() => {
    const mapElement = document.getElementById("map");

    // Cria o mapa só uma vez
    if (!mapElement.dataset.mapInitialized) {
      const map = L.map("map").setView([-23.5505, -46.6333], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker([-23.5505, -46.6333]).addTo(map);

      // Salva referência no DOM
      mapElement.dataset.mapInitialized = true;
      mapElement._leafletMap = map;
      mapElement._leafletMarker = marker;
    }

    // Atualiza localização se endereço mudar
    if (endereco) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data[0]) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            const map = mapElement._leafletMap;
            const marker = mapElement._leafletMarker;

            map.setView([lat, lon], 15);
            marker.setLatLng([lat, lon]);
          }
        });
    }
  }, [endereco]);

  return (
    <div id="map" className="map-container"></div>
  );
}

export default MapPage;
