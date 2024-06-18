<script setup>
import AppBar from './components/AppBar.vue';
import { watch, ref } from 'vue';
const drawer = ref(false);
const group = ref(null)
watch( group ,() => {
  drawer.value = false; 
});

</script>

<template>
  <v-app>
    <v-app-bar prominent color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Card Balance Calculator</v-app-bar-title>
        <v-btn icon="mdi-home" to="/card-balance-calculator-vue/"></v-btn>
    </v-app-bar>
    
    <v-main class="principal">
      <router-view/>
    </v-main>  
    
  <v-navigation-drawer
    v-model="drawer"
    class="br-teal-darken-4"
    theme="dark"
    temporary
  >
    <v-list-item
    link 
    to="/card-balance-calculator-vue/"
    title="Alert"
    prepend-icon="mdi-grid">
    
    </v-list-item>
    <v-list-item
    link 
    to="/card-balance-calculator-vue/calcular"
    title="Calcular saldo"
    prepend-icon="mdi-grid">
    
    </v-list-item>

  </v-navigation-drawer>
  </v-app>
</template>

<style scoped>

.principal{
  width: 70vw;
}
.card{
  width: 250px;
}

.botones{
  display: flex;
  padding: 20px;
  justify-content: space-around;
}

.alerta{
  margin-bottom: 30px;
}
</style>
