<<<<<<< HEAD
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import session, { login, logout } from '../stores/session' 
import LoginBadge from './LoginBadge.vue';

// for user sign in
let isActive = ref(false);
// for navbar
let isOpen = ref(false);

// closeDropdownMenu = function(){
// isActive = !isActive
// };
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


        <!-- NOT IMIDIATLY NEEDED BUT IF I DO DECIDE TO DO DROPDOW ITS THERE -->

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
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
                  <a href="#" class="dropdown-item" @click="login('Jimmy', 'McGill','src/assets/BCS_S6_Portrait_Jimmy.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Jimmy.webp">
                      Jimmy McGill
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Kim', 'Wexler','src/assets/BCS_S6_Portrait_Kim.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Kim.webp">
                      Kim Wexler
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Mike', 'Ehrmantraut','src/assets/BCS_S6_Portrait_Mike.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Mike.webp">
                      Mike Ehrmantraut
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Howard', 'Hamlin','src/assets/BCS_S6_Portrait_Howard.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Howard.webp">
                      Howard Hamlin
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Nacho', 'Varga','src/assets/BCS_S3_Nacho.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S3_Nacho.webp">
                      Nacho Varga
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Gus', 'Fring','src/assets/BCS_S3_GusFringe.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S3_GusFringe.webp">
                      Gus Fring
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Chuck', 'McGill','src/assets/BCS_S3_ChuckMcGill.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S3_ChuckMcGill.webp">
                      Chuck McGill
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Lalo', 'Salamanca','src/assets/BCS_S6_Portrait_Lalo.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Lalo.webp">
                      Lalo Salamanca
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
=======
<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
      
            <a class="navbar-item">
              Documentation
            </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

</template>
>>>>>>> parent of de71abb (changes)
