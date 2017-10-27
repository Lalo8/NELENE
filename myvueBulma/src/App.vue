<template>
<div id="app">

<nav class="navbar is-primary">
  <div class="navbar-brand">

    <div class="navbar-burger burger" data-target="navDropping" :class="{'is-active': active }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navDropping" class="navbar-menu" :class="{'is-active': active }">
    
    <div class="navbar-end">
      <div class="navbar-item">
        <router-link v-if="!$root.user" to="login" class="navbar-link">
          Login
        </router-link>   
        <router-link v-if="!$root.user" to="signup" class="navbar-link">
          Signup
        </router-link>   
        <a class="navbar-item" @click.prevent="logout" v-if="$root.user" href="#">
            Logout
          </a> 
      </div>
    </div>
  </div>
</nav>
<div class="subnavbar is-primary">
<a href="/"><h1>NEL℈NE</h1></a>
</div>

<section>
<div class="container">
    <router-view></router-view>
  </div>
</section>
</div>
</template>

<script>
import { logout } from '@/api/auth'
export default {

  name: 'app',
  data () {
    return {
      email:'',
      password:'',
    }
  },
  methods: {
    logout () {
      logout(this.$root)
      this.$router.push('/')
    },

    // toggled() {
    //   this.active =!this.active;
    // }
  },
  
}
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.container {
  margin-top:50px;
}


.subnavbar{
  height:200px;
  text-align: center;
  background-color: #795CD2;
}

.subnavbar h1 {
  padding-top : 30px;
  font-size:80px;
  color: white;
}


.navbar-link::after {
    border:0;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.5em;
    pointer-events: none;
    position: absolute;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 0.5em;
    margin-top: -0.375em;
    right: 1.125em;
    top: 50%;
}
</style>
