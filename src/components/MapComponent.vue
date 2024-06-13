<script>
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = "pk.eyJ1IjoiYWxleGZwMjgiLCJhIjoiY2x1Nmx0NmpqMjN6dTJqdDRlcXllbWFqOSJ9.6-YIJDQ6iVqv6IJFIg_Rbw";

export default {
    props: ['modelValue'],
    mounted() {
        // Inicializo variables a partir del prop.
        const { lng, lat, zoom, bearing, pitch } = this.modelValue;
        // Instancio el mapa.
        const map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: "mapbox://styles/alexfp28/clx354t5201ly01qxb8e32faw",
            center: [lng, lat],
            bearing,
            pitch,
            zoom,
        });
        // Para actualizar la ubicación en tiempo real.
    const updateLocation = () =>
        this.$emit('update:modelValue', this.getLocation());
    // Asigna los movimiento que realiza el usuario en el mapa.
    map.on('move', updateLocation);
    map.on('zoom', updateLocation);
    map.on('rotate', updateLocation);
    map.on('pitch', updateLocation);
    this.map = map;
    },
    unmounted() {
        this.map.remove();
        this.map = null;
    },
    watch: {
        // Del prop hago un evento para que esté constantemente visualizando la ubicación o el zoom.
        modelValue(next) {
            const curr = this.getLocation();
            const map = this.map;

            if (curr.lng != next.lng || curr.lat != next.lat)
            map.setCenter({ lng: next.lng, lat: next.lat });
            if (curr.pitch != next.pitch) map.setPitch(next.pitch);
            if (curr.bearing != next.bearing) map.setBearing(next.bearing);
            if (curr.zoom != next.zoom) map.setZoom(next.zoom);
        }
    },
    methods: {
        // Recibo la ubicación del prop.
        getLocation() {
            return {
                ...this.map.getCenter(),
                bearing: this.map.getBearing(),
                pitch: this.map.getPitch(),
                zoom: this.map.getZoom(),
            }
        } 
    },
}
</script>

<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<style>
.map-container {
  flex: 1;
}
</style>