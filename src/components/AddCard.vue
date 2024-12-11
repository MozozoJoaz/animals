<script setup>
import { ref, reactive , computed } from "vue";

var test = defineProps(
  {
    testProp : String,
    tab : Array
  }
);
// Nouvel animal à ajouter
var nouvelAnimal = reactive({
  nom: "",
  image: "",
  pays_origine: "",
  famille: "",
});

console.log(nouvelAnimal);
const emits = defineEmits(["newAnimal"]);

// Ajouter un nouvel animal
function ajouterAnimal() {
  console.log('dans addcard');
  if (
    nouvelAnimal.nom &&
    nouvelAnimal.image &&
    nouvelAnimal.pays_origine &&
    nouvelAnimal.famille
  ) {
    //animaux.push({ ...nouvelAnimal });
    console.log('dans addcard if');
    emits("newAnimal",nouvelAnimal);
    nouvelAnimal = { nom: "", image: "", pays_origine: "", famille: "" };
  }
}

</script>

<template>
  <h1>{{ test.testProp }}</h1>
  <i>{{ test.tab[1].name }}</i>

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
</template>

<style>
  h1{
    color: blue;
  }
</style>