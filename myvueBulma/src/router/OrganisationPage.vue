<template> 
<ul>
<li v-for="organisation in organisations">
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
        <p class="title is-4">{{organisation.name}}</p>
        <p class="subtitle is-6">{{organisation.author}}</p>
      </div>
    </div>

    <div class="content">
      <p>{{organisation.description}}</p>
      <br>
    <b-tag rounded type="is-danger is-medium">{{organisation.category}}</b-tag>
    </div>
  </div>
</div>

<p></p>


</li>
</ul>

</template>

<script>
import { getOrganisations } from '@/api/organisations'

export default {
  data() {
    return {
      organisations: [],
      errors: []
    }
  },
  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations
    })
  }
}

</script>

<style>
.card{
  max-width: 25rem;
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