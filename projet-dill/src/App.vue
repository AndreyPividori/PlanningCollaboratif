<template>
  <div id="app">
    <DillNavBar />
    <configuration />
  </div>
</template>

<script>
import DillNavBar from './components/Views/DillNavBar.vue'
import configuration from './components/Views/configuration.vue'

export default {
  name: 'App',
  components : {
    DillNavBar,
    configuration
  }
}

</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
