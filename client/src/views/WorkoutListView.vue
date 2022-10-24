<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Workout List</p>
            </div>
            <div class="message-body">

                <h1>Current Workout Viewing</h1>

                <button class="button is-primary" @click="$router.push('/addworkout')
                ">Add A New WORKOUT</button>
                <div v-for="(workout, i) in workouts" :key="i">




                    <div class="card">
                        <div class="card-image">
                            <header class="card-header">
                                <p class="card-header-title">
                                    {{ workout.title }}
                                </p>
                            </header>
                            <figure class="image is-4by3">
                                <img v-bind:src="workout.picture" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="../assets/sportIcon.webp" alt="">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{ workout.user }}</p>
                                    <p class="subtitle is-6">@{{ workout.user }}</p>
                                </div>
                            </div>

                            <div class="content">
                                {{ workout.type }}
                                {{ workout.duration }}
                                {{ workout.location }}
                                <br>
                                <p>{{ workout.date }}</p>
                            </div>
                        </div>
                    </div>
                    <button  class="button is-light" @click="deleteWorkout(i)">Delete</button>
                    
                </div>

            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import workouts, { deleteWorkout } from '../stores/workout'
import session, { login, logout } from '../stores/session' 
import { useAttrs } from 'vue';

</script>

<style scoped>

</style>