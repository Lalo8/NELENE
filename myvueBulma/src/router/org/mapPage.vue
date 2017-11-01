<template>
<googlemaps-map
  :center.sync="center"
  :zoom.sync="zoom"
  :options="mapOptions"
  @idle="onIdle"
  @click="onMapClick">

  <!-- User Position -->
  <googlemaps-user-position
    @update:position="setUserPosition"
  />

  <googlemaps-marker
    v-for="marker of markers"
    :key="marker._id"
    :label="{
      color: marker === currentmarker ? 'white' : 'black',
      fontFamily: 'Material Icons',
      fontSize: '20px',
      text: 'star_rate',
    }"
    :position="marker.position"
    @click="selectMarker(marker._id)"
  />
</googlemaps-map>
</template>