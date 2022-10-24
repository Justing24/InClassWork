<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
    

</script>

<template>
    <div  v-if="session.user != null" class="avatar">
        <img :src="session.user.image" width="64" height="64">
        Welcome to Muscle Booster {{session.user.firstName}} {{session.user.lastName}} 
        <div v-if="session.user.firstName != 'Guest'">
        <button @click="logout()" class="button is-info">Log Out</button>
        </div>
    </div>

</template>


<style scoped>

.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>