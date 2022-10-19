<template>
    <div>
        <section class="hero is-large is-info">
            <div class="hero-body">
                <p class="title">
                    Index Landing page
                </p>
                <p class="subtitle">
                    This is a landing page

                </p>
                <p> Please pick a user from the dropdown to sign in.
                </p>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
// need this stuff for rotues to work
import session, { login, logout } from '../stores/session'

// login('Guest', 'User', 'src/assets/images.jpg')
</script>

<style scoped>

</style>