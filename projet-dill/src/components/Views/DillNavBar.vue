<template>
  <div>
    <nav class="navbar is-fixed-top is-light">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Home
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/#/planning" title="Planning">
            Planning
          </a>
          <a class="navbar-item" href="/#/tests" title="Ajout tests">
            Ajout test
          </a>
          <a class="navbar-item" href="/#/config" title="Configuration">
            Config
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DillNavBar',
  data() {
    return {
      //hours: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
      hours: [
        {
          "hour":"00",
          isOccupated: true,
          'testName' : 'PEMS1'
        },
        {
          "hour":"00",
          isOccupated: false,
          'testName' : 'PEMS2'
        },
        {
          "hour":"00",
          isOccupated: true,
          'testName' : "PEMS3"
        }
      ],
      print: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
