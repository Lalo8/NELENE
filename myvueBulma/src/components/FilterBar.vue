<template>
  <div class="searchbar">
      <b-field type="is-primary" position="is-centered">
        <b-input v-model="searched" type="search" icon="search" placeholder="Search a country, a city, a type of organisation..." expanded>
        </b-input>
        <p class="control">
          <button @click="filter" class="button is-primary">Filter</button>
        </p>
      </b-field>
    </div>
</template>

<script>
export default {
    props: {
        organisations: Array,
    },
    data() {
        return {
            searched: ""
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy(this.organisations, this.searched))
        }
    }
}
</script>

<style>

</style>
