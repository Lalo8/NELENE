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

    <!-- <filter-bar :organisations="organisations"></filter-bar> -->
    <organisations-list :organisations="filterBy(organisations,searched)">
      <organisation-card></organisation-card>
    </organisations-list>
    <footer>
      <router-link to="/login" class="button is-primary is-outlined is-large is-focused" v-if="!$root.user">Want to add organisations ? Let's login</router-link>
      <router-link to="/organisations/add" class="button is-primary is-outlined is-large is-focused" v-if="$root.user">I want to add an organisation !</router-link>
    </footer>
  </div>
  </div>
</template>

<script>
import {getOrganisations} from '@/api/organisations'
import OrganisationsList from '@/components/OrganisationsList'
export default {
  components: {
    OrganisationsList,

  },
  data() {
    return {
      organisations: [],
      errors: [],
      selected: null,
      searched: '',
      name:''

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
footer {
  width: 400px;
  margin: 40px auto;
}
.searchbar{
margin: 30px auto;
max-width: 700px;
}
.card{
  max-width: 23rem;
   background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

li{
  display: flex;
  padding: 1rem;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  }
}
</style>