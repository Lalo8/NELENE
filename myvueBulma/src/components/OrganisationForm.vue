<template>
  <form @submit.prevent="$emit('submit', organisation)">
        <b-field label="Profile Picture">
        </b-field>
        <div class="field">
            <div class="file is-warning is-boxed is-centered">
                <br>
            </div>
        </div>
        <b-field label="Name">
            <b-input v-model="organisation.name"></b-input> 
        </b-field>
        <b-field label="Description">
            <b-input v-model="organisation.description" type="textarea"></b-input>
        </b-field>
        <b-field label="Contact">
            <b-input v-model="organisation.contact" type="Email" value="Email"></b-input>
        </b-field>
        <b-field grouped>
            <b-field label=" Address">
                <b-input v-model="organisation.address" placeholder="Address"></b-input>
            </b-field>
            <b-field label=" Country" expanded>
                <b-input v-model="organisation.country" placeholder="Sénégal, Cameroun..."></b-input>
            </b-field>
            <b-field label=" City" expanded>
                <b-input v-model="organisation.city" placeholder="Dakar, Yaoundé..."></b-input>
            </b-field>
        </b-field>

        <b-field label=" Category">
            <b-select placeholder="Select a category" icon="person" v-model="organisation.category">
                <option value="startup">Start-Up</option>
                <option value="incubator">Incubator</option>
                <option value="investment">Investment Fund</option>
            </b-select>
        </b-field>
        <b-field label="Type of needs" >
            <!-- v-if="organisation.category===startup" -->
            <b-select multiple native-size="3" v-model="organisation.needs">
                <option value="recruitment">recruitment</option>
                <option value="location">location</option>
                <option value="seed funding">seed funding</option>
            </b-select>
        </b-field>
        <b-field label="Type of activity">
            <b-select placeholder="Select the type of activity your are focused on"  v-model="organisation.type">
                <option value="tech">tech</option>
                <option value="social business">social business</option>
            </b-select>
        </b-field>
        <b-field>
        <button class="button is-primary" >Submit information</button>
        </b-field>
    </form>
</template>

<script>

export default {
  props: {
      displayInputLocation: {
          type:Boolean,
          default:false
      }
  },
  data() {
      return {
          picture: '',
          imgUrl: '',
          organisation:{
            name: "",
            description: "",
            contact: "",
            address: "",
            country: "",
            city: "",
            category: "",
            needs: []
          }
          
      } 
  }
}
</script>
<style>
.form {
    max-width: 600px;
    margin: auto;
}


</style>
