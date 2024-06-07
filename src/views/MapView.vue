<script>
import '/node_modules/mapbox-gl/dist/mapbox-gl.css';
import HeaderComponent from "../components/Header.vue";
import MapComponent from "../components/MapComponent.vue";


export default {
  components: {HeaderComponent, MapComponent},
  data: () => ({
    location: {
      lng: -0.23148,
      lat: 39.82437,
      bearing: 0,
      pitch: 0,
      zoom: 13
    }
  })
};
</script>

<template>
  <main>
    <HeaderComponent/>
    <div id="layout">
      <div id="sidebar">
      Longitude: {{ location.lng.toFixed(4) }} | Latitude: {{
      location.lat.toFixed(4) }} | Zoom: {{ location.zoom.toFixed(2) }} |
      <template v-if="location.bearing">
        Bearing: {{ location.bearing.toFixed(2) }} |
      </template>
      <template v-if="location.pitch">
        Pitch: {{ location.pitch.toFixed(2) }} |
      </template>
      <button
        @click="location = { lng: -0.23148, lat: 39.82437, zoom: 13, pitch: 0, bearing: 0 }"
      >
        Reset
      </button>
    </div>
      <MapComponent v-model="location" />
    </div>
  </main>
</template>

<style>
  #layout {
    flex: 1;
    display: flex;
    position: relative;
    height: 87vh;
  }
  #sidebar {
  background-color: rgb(35 55 75 / 90%);
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  border-radius: 4px;
}
</style>
