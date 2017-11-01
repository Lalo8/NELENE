<template> 
  <div>
    <div class="searchbar">
        <b-field type="is-primary" position="is-centered">
          <b-input v-model="search"type="search" icon="search" placeholder="Search a country, a city, a type of organisation..." expanded>
          </b-input>
            <p class="control">
              <button class="button is-primary">Filter</button>
            </p>
        </b-field>
    </div>

      <ul>
        <li v-for="organisation in filterBy(organisations,search)" :key="organisation._id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by2" v-if="organisation.type === 'social business'">
                  <img src="../../assets/social.png" alt="Placeholder image">
              </figure>
              <figure class="image is-3by2" v-if="organisation.type === 'tech'">
                  <img src="../../assets/tech2.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-5">{{organisation.name}}</p>
                  <p class="subtitle is-7">{{organisation.author}}</p>
                </div>
              </div>
              <div class="content">
                <p>{{organisation.description}}</p>
                <a class="button is-primary is-outlined is-small" :href="'/'+ organisation._id">Let's know more </a>
                <br>
                <br>
                <div>
                  <b-tag rounded type="is-danger is-medium">{{organisation.category}}</b-tag>
                  <b-tag rounded type="is-warning is-medium">{{organisation.type}}</b-tag>
                  <!-- <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag> -->
                  <b-tag rounded type="is-info is-medium">{{organisation.country}}</b-tag>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    <footer>
      <a href="/login" class="button is-primary is-outlined is-large is-focused" v-if="!$root.user">Want to add organisations ? Let's login</a>
      <a href="/new"class="button is-primary is-outlined is-large is-focused" v-if="$root.user">I want to add an organisation !</a>
    </footer>
  </div>
</template>

<script>
import {getOrganisations} from '@/api/organisations'

export default {
  data() {
    return {
      organisations: [],
      errors: [],
      selected: null,
      search: '',
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