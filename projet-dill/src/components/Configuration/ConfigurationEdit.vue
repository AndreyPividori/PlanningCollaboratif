<template>
    <div>
        <h1 class="title is-4 has-text-centered">
            Ajout de personnel
        </h1>
        <div class="columns">
          <div class="column has-text-right">
            <div>
              <label for="name">Nom :</label>
            </div>
            <div>
              <label for="forname">Prénom :</label>
            </div>
            <div>
              <label for="skill">Niveau de compétence :</label>
            </div>
          </div>
          <div class="column">
            <div>
              <input type="text" class="form-control" id="Name" v-model="name">
            </div>
            <div>
              <input type="text" class="form-control" id="Forname" v-model="forname">
            </div> 
            <div>
              <input type="text" class="form-control" id="Skill" v-model="skill">
            </div>  
          </div>
        </div>  
        <div class="has-text-centered">
          <button class="button is-info" @click="addTechnician()">Ajouter</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ConfigurationPrinter',
  data: function(){
        return {
            name: null,
            forname: null,
            skill: null
        }
    },
  methods:{
    addTechnician() {
           console.log(this.name, this.forname, this.skill);
        }
  }
}
</script>

<style scoped lang="scss">

</style>