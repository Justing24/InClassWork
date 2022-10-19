<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Workout List</p>
            </div>
            <div class="message-body">

                <h1>THIS IS A PAGE TO VIEW CURRENT WORKOUTS</h1>
                <div v-for="(workout, i) in workouts" :key="i">
                    {{ workout.title }}
                    <button @click="deleteWorkout(i)">Delete</button>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import workouts, {deleteWorkout} from '../stores/workout'
</script>

<style scoped>

</style>