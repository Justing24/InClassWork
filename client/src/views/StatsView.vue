<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Stats</p>
            </div>
            <div class="message-body">

                <h1>Viewing Workout Stats</h1>
            </div>
        </article>

        <div v-for="(workout, i) in workouts" :key="i">
                    {{ workout.user }}
                    {{ workout.title }}
                    {{ workout.location }}
                    {{ workout.type }}
                    {{ workout.duration }}
                    {{ workout.date }}
                </div>
    </div>
</template>

<script setup lang="ts">
import workouts, { deleteWorkout } from '../stores/workout'

</script>

<style scoped>

</style>