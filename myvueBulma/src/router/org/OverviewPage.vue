<template>
  <div>
    <div class="overviewcontainer">
      <div class="split1">
        <div class="result">
          <h1> X results </H1>
        </div>
        <organisations-list :organisations="filterBy(organisations,search)">
          <organisation-card></organisation-card>
        </organisations-list>
      </div>
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
.container{
  margin: 0px;
}

.searchbar{
margin-bottom: 20px;
margin-left: 12rem;
max-width: 600px;
}
.split{
  display:flex;
  flex-direction: column;
  height : 100%;
  padding: 10px;
  padding-top: 2rem;
      
}
.overviewcontainer{
  display: flex;
  flex-direction: row;
}
.result{
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  background-color:#F4F4F4;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #795CD2;
   
}
</style>
