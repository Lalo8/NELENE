<template>
    <div class="container">
        <div class="header">
            <h1 class= "title">Let's create a new organisation !</h1>
             <div class="trait"></div>
            <p>In order for the organisation page to be useful, please enter as many details as possible  </p>
        </div>
       
        <div class="card">
            <section>
                <form @submit.prevent="addNewOrganisation">
                    <b-field label="Profile Picture">
                    </b-field>
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
                    <button class="button is-primary" >Submit information</button>
                </form>
            </section>
        </div>
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
                type:"",
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
                this.$router.push('/');
            })
            
        }
    }
  }


</script>

<style scoped >
.trait
{
background-color:rgb(121,92,210);
height: 4pt;
width: 30%;
margin-left: 27rem;
margin-top: -8px;
}
.title{
margin : 0px;
}
.header{
    text-align: center;
    margin-top: 5rem;
   ;
}

.header p {
    margin-top: 15px;
}
.container{
    padding: 20px;
    margin-bottom: 50px;
}
.form {
    max-width: 800px;
    margin: auto;
}
.card{
  padding: 50px;
    margin-top: 40px;
    margin-bottom: 50px;
    max-width: 60rem;
    background-color: white;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 20px 40px -14px rgba(121,92,210,0.9);
    box-shadow: 0 20px 40px -14px rgba(121,92,210,1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: auto;
    overflow: hidden;
}

</style>