
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
            <div class="card-image">
                <figure class="image is-4by3">
                    <img :src="session?.user?.image" width="1280" height="960" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{session?.user?.firstName}} {{session?.user?.lastName}} </p>
                        <p class="subtitle is-6">@{{session.user?.firstName}} {{session.user?.lastName}}</p>
                    </div>
                </div>

                <div class="content">
                    <br>
                
                    <br>
                    <br><br>
                </div>
            </div>
        </div>
    </div>

    <div class="column is-half">

        <article class="message is-link">
  <div class="message-body">

        Welcome, <strong>{{session?.user?.firstName}} {{session?.user?.lastName}}</strong>! 
        
  </div>
</article>
    </div>
</div>
</template>


<style scoped>

</style>