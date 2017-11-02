<template>
  <gmap-map
      :class="{
        map: true,
        small: small
      }"
      :center="center"
      :zoom="zoom"
    > 
      <gmap-marker v-for="organisation in filterBy(organisations,searched)" :key="organisation._id"
        :position="{ lat: organisation.location.coordinates[1], lng: organisation.location.coordinates[0] }"
        ></gmap-marker>

    </gmap-map>
</template>

<script>
export default {
props: {
    organisations: Array,
    small: {
      type: Boolean,
      default: true,
    }
  },
  data () {
		return {
			center: {
				lat:  3.319292,
				lng: 4.4218547,
      },
      searched:'',
	    userPosition: null,
      zoom: 4
		}
  },
}
</script>

<style scoped>
.map {
  height: 600px;
  width: 100%;
}
.small {
  height: 660px;
  width : 65rem;
}
</style>
