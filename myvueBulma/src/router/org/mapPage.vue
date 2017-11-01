<template>
  <googlemaps-map
    class="map"
    ref="map"
    :center.sync="center"
    :zoom.sync="zoom"
    > 

  <googlemaps-user-position
      @update:position="setUserPosition"
    />

    <googlemaps-marker :label="{
        color: marker === currentmarker ? 'white' : 'black',
        fontFamily: 'Material Icons',
        fontSize: '20px',
        text: 'star_rate',
      }"
      :position="{ lat: 48.8735, lng: 2.2951 }"
    />-->
  </googlemaps-map>
</template>

<script>
export default {
	data () {
		return {
			center: {
				lat:  3.319292,
				lng: 4.4218547,
			},
			userPosition: null,
			zoom: 4,
		}
	}
}
</script>

<style scoped>
.map {
  height: 600px;
  width: 100%;
}
</style>