<template>
  <div>
    <div class="searchbar">
      <b-field type="is-primary" position="is-centered">
        <b-input v-model="searched" type="search" icon="search" placeholder="Search a country, a city, a type of organisation..." expanded>
        </b-input>
        <p class="control">
          <button class="button is-primary">Filter</button>
        </p>
      </b-field>
    </div>
    <gmap-map
      class="map"
      :center="center"
      :zoom="zoom"
    > 
      <gmap-marker v-for="organisation in filterBy(organisations,searched)" :key="organisation._id"
      
        :position="{ lat: organisation.location.coordinates[1], lng: organisation.location.coordinates[0] }"
        ></gmap-marker>

    </gmap-map>
  </div>  
</template>

<script>
import { getOrganisations } from "@/api/organisations";

export default {
	data () {
		return {
			center: {
				lat:  3.319292,
				lng: 4.4218547,
      },
      searched:'',
			userPosition: null,
      zoom: 4,
      organisations:[]
		}
  },
  computed: {
    filteredOrganisations() {
      return this.organisations.filter(option => {
        return option.organisation.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations
    })
  }
}
</script>

<style scoped>
.map {
  height: 600px;
  width: 100%;
}
</style>