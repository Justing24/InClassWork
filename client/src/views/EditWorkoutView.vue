<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Edit Workout</p>
            </div>
            <div class="message-body">


                <div class="field">
            <label class="label is-large">Add New Workout</label>
            <label class="label">Title</label>
            <div class="control has-icons-left has-icons-right">
                <input  class="input is-large"  placeholder="Enter Title" v-model="title"/>
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope fa-xs"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check fa-xs"></i>
                </span>
            </div>
        </div>


        <div class="field">
            <label class="label">Location</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large"  placeholder="Enter Location" v-model="location"/>
                <span class="icon is-large is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-large is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Type</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large"  placeholder="Enter Type of Workout" v-model="type"/>
                <span class="icon is-medium is-left">
                    <i class="fas fa-envelope fa-lg"></i>
                </span>
                <span class="icon is-medium is-right">
                    <i class="fas fa-check fa-lg"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Duration</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large"  placeholder="Enter Duration" v-model="duration"/>
                <span class="icon is-large is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-large is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Date</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large"  placeholder="Enter Date" v-model="date"/>
                <span class="icon is-large is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-large is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>
        <div class="control">
            <button  @click="SubmitForm()"  class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button @click="$router.push('/home')
            " class="button is-link is-light">Cancel</button>
        </div>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import workouts, { addWorkout, editWorkout } from '../stores/workout'
import session, { login, logout } from '../stores/session'
import { ref } from 'vue';
import router from '../router'

let title = ref("")
let location = ref("")
let type = ref("")
let duration = ref("")
let date = ref("")



</script>

<style scoped>

</style>