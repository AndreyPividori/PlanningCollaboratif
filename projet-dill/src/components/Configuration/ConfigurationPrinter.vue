<template>
    <div>
        <h1 class="title is-4 has-text-centered">
            Liste du personnel
        </h1>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Niveau de compétence</th>
            </thead>
            <tbody>
                <tr v-for="technician in allDatas" :key="technician.Nom + technician.Prenom + technician.Skill">
                    <td>{{technician.Prenom}}</td>
                    <td>{{technician.Nom}}</td>
                    <td>{{technician.Skill}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  name: 'ConfigurationPrinter',
  props: {
      technicianDatas: {
          type : Array,
          require : true
      }
  },
  data(){
      return{
          allDatas : this.technicianDatas
      }
  }
}
</script>

<style scoped lang="scss">

</style>