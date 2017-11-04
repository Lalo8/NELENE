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
padding:1rem 4px 5px 45px;
overflow: auto;
/* position: absolute; */
top: 0;
left: 0;
right: 0;
bottom: 0;
margin-bottom: 2px;
background-color:#FBF4FF;
max-height: 750px;
padding-bottom: 100px;

} 
.container2 {
    margin: auto;
    max-width: 1280px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 6rem;
}
</style>
