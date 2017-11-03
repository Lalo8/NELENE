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
        default: false,
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
.small{
max-height: 800px;
padding:5rem 10px 5px 10px;
    overflow: auto;
    /* position: absolute; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 330px;
    margin-bottom: 2px;
     background-color:#F4F4F4;
} 
</style>
