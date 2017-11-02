<template>
<ul :class="{
        small: small
      }">
    <organisation-card
        v-for="organisation in organisations"
        :key="organisation._id"
        :organisation="organisation"
        :editable="editable"
    >
    </organisation-card>
</ul>
</template>

<script>
import OrganisationCard from '@/components/OrganisationCard'
export default {
    components: {
        OrganisationCard
    },
    props: {
        organisations: Array,
        editable: {
            type: Boolean,
            default: false
        },
    small: {
        type: Boolean,
        default: true
    }
    },
}
</script>

<style scoped>

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
/* .small{
max-width: 900px;
padding:20px;
} */

</style>
