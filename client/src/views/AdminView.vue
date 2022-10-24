<template>
    <div>
        <article class="message is-warning">
            <div class="message-header">
                <p>Admin</p>
            </div>
            <div class="message-body">

                <h1>THIS IS AN ADMIN PAGE</h1>
                <p>if you are able to see this page and are either not signed in or signed in with another user, a bug is present</p>
            </div>
        </article>
        <button  @click="$router.push('/home')"  class="button is-warning">Go Back to /home</button>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>