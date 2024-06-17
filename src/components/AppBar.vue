<template>
    <!-- Este componente mostrara una barra de aplicacion -->
    <v-app-bar prominent color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Card Balance Calculator</v-app-bar-title>
        <v-btn icon="mdi-home" to="/card-balance-calculator-vue/"></v-btn>
    </v-app-bar>

</template>


<script setup>
</script>