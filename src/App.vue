<script setup>
import { ref, onMounted, reactive , computed } from "vue";
import Card from "./components/Card.vue";
import AddCard from "./components/AddCard.vue"; 
import Title from "./components/Title.vue";
import Header from "./components/Header.vue";

</script>

<template>
  <Header />
  <RouterView />  
</template>

<style> 
h1{
  color: red;
}
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