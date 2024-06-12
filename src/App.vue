<script setup>
import AppBar from './components/AppBar.vue';
</script>

<template>
  <v-app>
  <AppBar/>
   
  <v-main class="principal">
    <router-view/>
  </v-main>  
  
  <v-navigation-drawer class="br-teal-darken-4" theme="dark" permanent>
    <v-list-item
    link 
    to="/"
    title="Alert"
    prepend-icon="mdi-grid">
    
    </v-list-item>
    <v-list-item
    link 
    to="/calcular"
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
