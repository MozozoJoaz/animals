<script setup>
import { ref, onMounted, reactive , computed } from "vue";

const animalsAPI = ref([]);
const loading = ref(false);
const error = ref(null);


const API_KEY = 'live_NaFndEZVTWE1QuSn4pgODPOVrTF9u4Esk5hRVJVowbwAAd1RPIvfy6kMD2UKtBB1'; // Remplacez par votre clé API
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10'; // Remplacez par l'URL de l'API

// Fonction pour fetch les données
const fetchAnimalsAPI = async () => {
  loading.value = true; // Début du chargement
  error.value = null; // Réinitialisation de l'erreur


  try {
    const response = await fetch(API_URL, {
          method: 'GET', // ou 'POST' selon l'API
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': ` ${API_KEY}`, // Ajout de la clé API dans les headers
          },
        });await fetch('');
        
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    animalsAPI.value = await response.json(); // Stockage des données
    console.log(animalsAPI);
  } catch (err) {
    error.value = `Erreur : ${err.message}`; // Capture de l'erreur
  } finally {
    loading.value = false; // Fin du chargement
  }
};

 // Appel de l'API au montage du composant
 onMounted(() => {
  fetchAnimalsAPI();
    });



</script>
<template>
    <h1> CATSSSSSSSSSSSSSSSSS</h1>
    <div v-for="(cat, index) in animalsAPI"  class="animal-card">
        <img
          :src="cat.url"
          :alt="`Image de ${cat.id}`"
          class="animal-image"
        />
      </div>
</template>