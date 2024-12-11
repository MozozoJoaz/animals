<script>
  import Card from "./Card.vue";

  export default {
   
    name: "CardList",
    components: {
      Card,
    },
    props: {
      animaux: {
        type: Array,
        required: true,
      },
    },
    methods: {
        supprimerAnimal(index) {
            
        },
        modifierAnimal(index) {
            
        },
        mettreAJourAnimal() {
          animalEnCours.value = null;
        },
        annulerModification() {
            
        },
    },
  };

  </script>


<template>
    <div class="card-list">
      <Card
        v-for="(animal, index) in animaux"
        :key="index"
        :nom="animal.nom"
        :image="animal.image"
        :paysOrigine="animal.pays_origine"
        :famille="animal.famille"
        @on-delete="supprimerAnimal(index)"
        @on-edit="modifierAnimal(index)"
      />
      <div v-if="animalEnCours !== null" class="edit-form">
        <h3>Modifier l'animal : {{ animaux[animalEnCours].nom }}</h3>
        <form @submit.prevent="mettreAJourAnimal">
            <input v-model="animaux[animalEnCours].nom" placeholder="Nom de l'animal" required />
            <input v-model="animaux[animalEnCours].image" placeholder="URL de l'image" required />
            <input v-model="animaux[animalEnCours].pays_origine" placeholder="Pays d'origine" required />
            <input v-model="animaux[animalEnCours].famille" placeholder="Famille" required />
            <button type="submit">Enregistrer les modifications</button>
            <button type="button" @click="annulerModification">Annuler</button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  </style>