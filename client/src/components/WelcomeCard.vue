
<script setup lang="ts">
import session, { login, logout } from '../stores/session' ;
</script>
<template>
    <div class="columns">
    <div class="column is-half">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Current User
                </p>
            </header>
        
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{session?.user?.firstName}} {{session?.user?.lastName}} </p>
                        <p class="subtitle is-4">@{{session.user?.firstName}} {{session.user?.lastName}}</p>
                    </div>
                </div>
                <div class="content">
                
                    <br>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <article class="message is-link">
  <div class="message-body">
        Welcome back <strong>{{session?.user?.firstName}} {{session?.user?.lastName}}</strong>! 
        
  </div>
</article>
    </div>
</div>
</template>
<style scoped>
</style>