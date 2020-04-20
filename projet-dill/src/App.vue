<template>
  <div id="app">
    <nav>
      <div class="navbar-menu">
        <router-link class="navbar-item" to="/Home">Home</router-link>
        <router-link class="navbar-item" to="/Planning">Planning</router-link>
        <router-link class="navbar-item" to="/Test">Ajout Test</router-link>
        <router-link class="navbar-item" to="/Configuration">Configuration</router-link>
      </div>
    </nav>
    <!-- le composant correspondant à la route sera rendu ici -->
    <router-view></router-view>
  </div>


</template>

<script>

export default {
  name: 'App',
  components : {
  }
}

</script>

<style lang="scss">
  @import "~bulma/css/bulma.css";
</style>
