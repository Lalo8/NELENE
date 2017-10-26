<template>
<div class="container">
    {{organisation}}
<section>

<form @submit.prevent="addNewOrganisation">
<b-field label="Profile Picture"></b-field>
<div class="field">
  <div class="file is-warning is-boxed is-centered">
    <label class="file-label">
      <input class="file-input" type="file" name="resume">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fa fa-cloud-upload"></i>
        </span>
        <span class="file-label">
          Upload your file 
        </span>
      </span>
    </label>
  </div>
</div>
</b-field>
<progress class="progress is-primary" value="15" max="100">30%</progress>

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
        <b-field label="Type of needs">
            <b-select multiple native-size="3" v-model="organisation.needs">
                <option value="recruitment">recruitment</option>
                <option value="location">location</option>
                <option value="seed funding">seed funding</option>
                
            </b-select>
        </b-field>
        <button class="button is-primary">Submit information</button>
         </form>
    </section>
    </div>
   
</template>
<script>
import { addNewOrganisation } from '@/api/organisations'
export default {
    data() {
        return {
            organisation: {
                name:"",
                description:"",
                contact:"",
                address:"",
                country:"",
                city:"",
                category:"",
                needs:[],
            },
            
            errors: [],
            selectedOptions: []
        }
    },
    methods: {
        
        addNewOrganisation() {
            // this.organisation.name = "Paps"
            // this.organisation.description = "Geolocation delivery service app"
            // this.organisation.contact = "contact@paps.com"
            // this.organisation.address = "2 ruoe"
            // this.organisation.country = "Sénégal"
            // this.organisation.city = "Dakar"
            // this.organisation.category = "startup"
            // this.organisation.needs = "seed funding"
            // this.organisation.ownerId = "59f0ab43c12c7c4a2bfc0918"
            addNewOrganisation(this.organisation).then(organisation => {
                console.log("Organisation created: ", organisation)
                this.$router.push('/organisations');
            })
            
        }
    }
  }


</script>

<style scoped >

.form {
max width: 500px;
margin : auto;

}

.field {
    margin-top:50px;
    margin-bottom: 20px;
}
</style>