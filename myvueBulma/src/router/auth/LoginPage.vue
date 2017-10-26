<template>
<div>
<form @submit.prevent="login">
<b-field label="Email">
            <b-input v-model="email" maxlength="30" icon="user" >
            </b-input>
          
  </b-field>
        <b-field label="Password">
            <b-input type="password"
            v-model="password"
                password-reveal>
            </b-input>
        </b-field>

      <button class="button is-primary">Login</button>


</form>
 </div>
</template>

<script>

import { login } from '@/api/auth'
export default {
  data () {
    return {
      email:'',
      password:'',
    }
  },
 methods: {
    login () {
      login(this.email, this.password, this.$root).then(data => {
        this.$router.push('/')
      })
    },
  },

}
</script>

<style scoped>
  form {
    max-width: 400px;
    margin: auto;
  }
  b-input icon {
  
    height: 1.60em;
    margin-right:3px;
  }
</style>