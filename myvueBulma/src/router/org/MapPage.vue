<template>
  <gmap-map
    class="map"
    :center="center"
    :zoom="zoom"
  > 
    <gmap-marker
      :position="{ lat: 48.8735, lng: 2.2951 }"
    ></gmap-marker>
  </gmap-map>
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