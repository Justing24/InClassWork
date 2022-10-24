<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import session, { login, logout } from '../stores/session' 
import LoginBadge from './LoginBadge.vue';

let isActive = ref(false);
let isOpen = ref(false);


</script>

<template>
  <nav class="navbar is-info
" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen"  class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <router-link to="/home" class="navbar-item">
          Home
        </router-link>

        <router-link to="/workout" class="navbar-item">
          Workout
        </router-link>
        <router-link to="/stats" class="navbar-item">
          Stats
        </router-link>


      
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- start of user login dropdown -->
            <div class="dropdown is-active">
              <div class="dropdown-trigger">
                <button v-if="session.user == null || session.user.firstName == 'Guest'" @click="isActive = !isActive" class="button" aria-haspopup="true"
                  aria-controls="dropdown-menu3">
                  <span>User Log in</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div v-if="session.user == null || session.user.firstName == 'Guest' " class="dropdown-menu" id="dropdown-menu3" role="menu" v-show="isActive">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item" @click="login('Justin', 'Ginese','src/assets/BCS_S6_Portrait_Jimmy.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Jimmy.webp">
                      Justin Ginese
                    </figure>
                  </a>
            
                </div>
              </div>
            </div>
            <router-link to="/admin" class="button is-dark">
              Admin
            </router-link>
            <LoginBadge></LoginBadge>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>



<style lang="scss" scoped>


</style>