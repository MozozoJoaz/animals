<script setup>
import { ref, reactive , computed } from "vue";
import CardList from "./components/CardList.vue";
import AddCard from "./components/AddCard.vue";
// Liste des animaux
const animaux = reactive([
  {
    nom: "Lion",
    image: "./src/assets/doggo.jpg",
    pays_origine: "Afrique",
    famille: "Félidés",
  },
  {
    nom: "Panda géant",
    image: "./src/assets/chien.jpeg",
    pays_origine: "Chine",
    famille: "Ursidés",
  },
  {
    nom: "Kangourou",
    image: "./src/assets/lama.png",
    pays_origine: "Australie",
    famille: "Macropodidés",
  },
  {
    nom: "Aigle royal",
    image: "./src/assets/canard.png",
    pays_origine: "Hémisphère nord",
    famille: "Accipitridés",
  },
  {
    nom: "Poisson-clown",
    image: "./src/assets/bird.png",
    pays_origine: "Océan Indien et Pacifique",
    famille: "Pomacentridés",
  },
  {
    nom: "Cobra royal",
    image: "./src/assets/ntfound.jpeg",
    pays_origine: "Asie du Sud et du Sud-Est",
    famille: "Élapidés",
  },
]);



// Index de l'animal en cours d'édition
const animalEnCours = ref(null);




</script>

<template>
  <main>
    <div>
      <h1>Ajouter un animal</h1>
      <AddCard />
      <h1>Liste des animaux</h1>
      <CardList :animaux="animaux"/>
    </div>
  </main>
</template>

<style>
/* Styles pour l'affichage */
.animal-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 16px;
  text-align: center;
  width: 250px;
 
  display: inline-block;
}

.animal-image {
  width: 150px;
  height: auto;
  border-radius: 8px;
}

button {
  margin: 8px;
}

.animal-form,
.edit-form {
  margin-bottom: 20px;
}

input {
  display: block;
  margin: 8px 0;
  padding: 8px;
  width: 100%;
  max-width: 300px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
