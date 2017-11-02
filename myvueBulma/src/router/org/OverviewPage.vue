<template>
  <div>
    <filter-bar :organisations="organisations"></filter-bar>
    <div class="split">
      <organisations-list :organisations="filterBy(organisations,search)">
        <organisation-card></organisation-card>
      </organisations-list>
      <map-org :organisations="organisations"></map-org>
    </div>
  </div>  
</template>

<script>
import { getOrganisations } from "@/api/organisations";
import MapOrg from '@/components/MapOrg';
import FilterBar from '@/components/FilterBar';
import OrganisationsList from '@/components/OrganisationsList'


export default {
   components: {
        MapOrg,
        FilterBar,
        OrganisationsList
    },
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
  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations
    })
  }
}
</script>

<style scoped>

.searchbar{
margin: 30px auto;
max-width: 700px;
}
.split{
  display:flex;
      
}
</style>
