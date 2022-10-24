
<script  setup lang="ts">
import workouts, { addWorkout } from '../stores/workout'
import session, { login, logout } from '../stores/session'
import { ref } from 'vue';
import router from '../router'

let title = ref("")
let location = ref("")
let type = ref("")
let duration = ref("")
let date = ref("")


function SubmitForm() {
    console.log(picture.value)
   addWorkout(`${session?.user?.firstName} ${session?.user?.lastName}`,title.value,date.value,duration.value,location.value,type.value)

  }


</script>

<template>
    <div>

        <article class="message is-info">
            <div class="message-header">
                <p>Add Workout</p>

            </div>
        </article>

        <div class="field">
            <label class="label is-large">Add New Workout</label>
            <label class="label">Title</label>
            <div class="control">
                <input  class="input"  placeholder="Enter Title" v-model="title"/>
                <span class="icon">
                    <i class="fas fa-envelope fa-xs"></i>
                </span>
                <span class="icon">
                    <i class="fas fa-check fa-xs"></i>
                </span>
            </div>
        </div>

        

        <div class="field">
            <label class="label">Location</label>

            <div class="control">
                <input class="input"  placeholder="Enter Location" v-model="location"/>
                <span class="icon">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Type</label>

            <div class="control">
                <input class="input"  placeholder="Enter Type of Workout" v-model="type"/>
                <span class="icon">
                    <i class="fas fa-envelope fa-lg"></i>
                </span>
                <span class="icon">
                    <i class="fas fa-check fa-lg"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Duration</label>

            <div class="control">
                <input class="input"  placeholder="Enter Duration" v-model="duration"/>
                <span class="icon">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Date</label>

            <div class="control">
                <input class="input"  placeholder="Enter Date" v-model="date"/>
                <span class="icon">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>
        <div class="control">
          
            <button  @click="SubmitForm()"  class="button is-link">Submit</button>
        </div>
    
    </div>
</template>

<style scoped>

</style>