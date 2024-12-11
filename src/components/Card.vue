<template>
    <div class="card">
      <img :src="image" :alt="`Image de ${nom}`" class="card-image" />
      <h2>{{ nom }}</h2>
      <p><strong>Pays d'origine :</strong> {{ paysOrigine }}</p>
      <p><strong>Famille :</strong> {{ famille }}</p>
      <button @click="modifierAnimal(index)">Modifier</button>
      <button @click="supprimerAnimal(index)">Supprimer</button>
    </div>
  </template>
  
  <script>
    // Supprimer un animal
    function supprimerAnimal(index) {
    animaux.splice(index, 1);
    }

    // Modifier un animal (ouvrir le formulaire d'édition)
    function modifierAnimal(index) {
    animalEnCours.value = index;
    }

  export default {
    name: "Card",
    props: {
      nom: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      paysOrigine: {
        type: String,
        required: true,
      },
      famille: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 10px auto;
  }
  .card-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
  }
  button:hover {
    background-color: darkred;
  }
  </style>