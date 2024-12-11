<script setup>
import { ref, onMounted, reactive , computed } from "vue";
import Card from "./Card.vue";
import AddCard from "./AddCard.vue"; 
import Title from "./Title.vue";
import Header from "./Header.vue";
// Liste des animaux
const animaux = reactive([
  {
    nom: "Lion",
    image: "@/assets/doggo.jpg",
    pays_origine: "Afrique",
    famille: "Félidés",
  },
  {
    nom: "Panda géant",
    image: "@/assets/chien.jpeg",
    pays_origine: "Chine",
    famille: "Ursidés",
  },
  {
    nom: "Kangourou",
    image: "@/assets/lama.png",
    pays_origine: "Australie",
    famille: "Macropodidés",
  },
  {
    nom: "Aigle royal",
    image: " @/assets/canard.png",
    pays_origine: "Hémisphère nord",
    famille: "Accipitridés",
  },
  {
    nom: "Poisson-clown",
    image: "@/assets/bird.png",
    pays_origine: "Océan Indien et Pacifique",
    famille: "Pomacentridés",
  },
  {
    nom: "Cobra royal",
    image: "@/assets/ntfound.jpeg",
    pays_origine: "Asie du Sud et du Sud-Est",
    famille: "Élapidés",
  },
]);


// Images disponibles
const imgTab = [
  { name: "bird", src: "./src/assets/bird.png" },
  { name: "canard", src: "./src/assets/canard.png" },
  { name: "chien", src: "./src/assets/chien.jpeg" },
  { name: "saddog", src: "./src/assets/ntfound.jpeg" },
  { name: "lama", src: "./src/assets/lama.png" },
  { name: "doggo", src: "./src/assets/doggo.jpg" },
];

// Nouvel animal à ajouter
/*const nouvelAnimal = ref({
  nom: "tototo",
  image: "",
  pays_origine: "",
  famille: "",
});*/

function demoEmit(data){
  console.log("dans app" + data)
  animaux.push(data)
  console.log(animaux)
}

// Index de l'animal en cours d'édition
const animalEnCours = ref(null);

// Supprimer un animal
function supprimerAnimal(index) {
  animaux.splice(index, 1);
}

// Modifier un animal (ouvrir le formulaire d'édition)
function modifierAnimal(index) {
  animalEnCours.value = index;
}

// Mettre à jour un animal
function mettreAJourAnimal() {
  animalEnCours.value = null;
}
</script>

<template>

    <main>
      <div>
        <h1>Ajouter un animal</h1>
        <AddCard :tab="imgTab" testProp="hello" @newAnimal="demoEmit" />
        
        <Title >
            <h1>Liste des animaux </h1>
        </Title>
  
        <Title >
            <p>Liste des animaux </p>
        </Title>
        
  
        <!-- Liste des animaux -->
        <div v-for="(animal, index) in animaux" :key="animal.nom" class="animal-card">
          <img
            :src="animal.image"
            :alt="`Image de ${animal.nom}`"
            class="animal-image"
          />
          <h2>{{ animal.nom }}</h2>
          <p><strong>Pays d'origine :</strong> {{ animal.pays_origine }}</p>
          <p><strong>Famille :</strong> {{ animal.famille }}</p>
          <p><strong>url :</strong> {{ animal.image }}</p>
  
          <!-- Boutons pour modifier ou supprimer -->
          <button @click="modifierAnimal(index)">Modifier</button>
          <button @click="supprimerAnimal(index)">Supprimer</button>
        </div>
  
        <!-- Formulaire pour modifier un animal -->
        <form
          v-if="animalEnCours !== null"
          @submit.prevent="mettreAJourAnimal"
          class="edit-form"
        >
          <h3>Modifier l'animal : {{ animaux[animalEnCours].nom }}</h3>
          <input
            type="text"
            v-model="animaux[animalEnCours].nom"
            placeholder="Nom de l'animal"
            required
          />
          <input
            type="text"
            v-model="animaux[animalEnCours].image"
            placeholder="URL de l'image"
            required
          />
          <input
            type="text"
            v-model="animaux[animalEnCours].pays_origine"
            placeholder="Pays d'origine"
            required
          />
          <input
            type="text"
            v-model="animaux[animalEnCours].famille"
            placeholder="Famille"
            required
          />
          <button type="submit">Enregistrer les modifications</button>
          <button type="button" @click="animalEnCours = null">Annuler</button>
        </form>
      </div>
    </main>
  </template>
  
 