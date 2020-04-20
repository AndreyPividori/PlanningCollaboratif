<template>
    <div>
        <br><br><br>
        <div class="columns">
            <div class="column">
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
                            <tr v-for="technician in TechniciansDatas" :key="technician.Nom + technician.Prenom + technician.Skill">
                                <td>{{technician.Prenom}}</td>
                                <td>{{technician.Nom}}</td>
                                <td>{{technician.Skill}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="column">
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
            </div>

        </div>

    </div>
</template>

<script>

export default {
  name: 'Configuration',
  components : {
  },
  data() {
    return {
        TechniciansDatas: [
            {
                "Prenom" : "Noel",
                "Nom" : "Flantier",
                "Skill" : 1
            },
            {
                "Prenom" : "Hubert",
                "Nom" : "Blazon",
                "Skill" : 4
            },
            {
                "Prenom" : "Jack",
                "Nom" : "Jefferson",
                "Skill" : 3
            },
            {
                "Prenom" : "Henri",
                "Nom" : "Gollant",
                "Skill" : 6
            }

        ],
        name: null,
        forname: null,
        skill: null,
        newDatas: []
    }
  },
  computed:{
  },
  methods:{
    addTechnician() {
            console.log(this.name, this.forname, this.skill);
            let oTemps = {
                name: this.name,
                forname: this.forname,
                skill: this.skill
            }
            this.newDatas.push(oTemps);
            console.log(this.newDatas);

            if (this.name != null && this.forname != null && this.skill != null 
              && this.name != "" && this.forname != "" && this.skill != "") {
                alert(this.name + this.forname + "a été ajouté à la base et sera disponible au prochain rafraichissement de la base.")
            }else{
                alert('Une erreur est dectectée dans le formulaire');
                
            }
        }
  },
  watch:{
  }
}
    
</script>

<style scoped lang="scss">

</style>