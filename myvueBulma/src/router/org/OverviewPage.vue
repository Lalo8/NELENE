<template>
  <div>
    <div class="overviewcontainer">
        <organisations-list :organisations="filterBy(organisations,search)">
          <organisation-card></organisation-card>
        </organisations-list>
        <div class="split">
          <filter-bar :organisations="organisations"></filter-bar>
          <map-org :organisations="organisations"></map-org>
        </div>
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
margin-bottom: 20px;
margin-left: 26rem;
max-width: 700px;
}
.split{
  display:flex;
  flex-direction: column;
  height : 100%;
  padding: 10px;
      
}
.overviewcontainer{
  display: flex;
  flex-direction: row;
}
</style>
