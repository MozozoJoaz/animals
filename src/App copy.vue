<script setup>
import { ref, reactive , computed } from "vue";
import Card from "./components/Card.vue";
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

// Nouvel animal à ajouter
const nouvelAnimal = ref({
  nom: "",
  image: "",
  pays_origine: "",
  famille: "",
});

// Index de l'animal en cours d'édition
const animalEnCours = ref(null);

// Ajouter un nouvel animal
function ajouterAnimal() {
  if (
    nouvelAnimal.value.nom &&
    nouvelAnimal.value.image &&
    nouvelAnimal.value.pays_origine &&
    nouvelAnimal.value.famille
  ) {
    animaux.push({ ...nouvelAnimal.value });
    nouvelAnimal.value = { nom: "", image: "", pays_origine: "", famille: "" };
  }
}

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

// Images disponibles
const imgTab = [
  { name: "bird", src: "./src/assets/bird.png" },
  { name: "canard", src: "./src/assets/canard.png" },
  { name: "chien", src: "./src/assets/chien.jpeg" },
  { name: "saddog", src: "./src/assets/ntfound.jpeg" },
  { name: "lama", src: "./src/assets/lama.png" },
  { name: "doggo", src: "./src/assets/doggo.jpg" },
];
</script>

<template>
  <main>
    <div>
      <h1>Ajouter un animal</h1>
      <form @submit.prevent="ajouterAnimal" class="animal-form">
        <input
          type="text"
          v-model="nouvelAnimal.nom"
          placeholder="Nom de l'animal"
          required
        />
        <input
          type="text"
          v-model="nouvelAnimal.image"
          placeholder="URL de l'image"
          required
        />
        <input
          type="text"
          v-model="nouvelAnimal.pays_origine"
          placeholder="Pays d'origine"
          required
        />
        <input
          type="text"
          v-model="nouvelAnimal.famille"
          placeholder="Famille"
          required
        />
        <button type="submit">Ajouter un animal</button>
      </form>

      <h1>Liste des animaux</h1>

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
