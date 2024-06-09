<template>
    <v-alert
    class="alerta"
    
    title="Nota"
    type="warning"
  >{{calcularDias()}}</v-alert>
    
    <v-row align="center" no-gutters>
      <v-col class="text-h2" cols="6">S/</v-col>
        <v-col
          class="text-h2"
          cols="3"
        >
          {{ saldoFormateado }}
        </v-col>

        
  </v-row>

  <div class="botones">
        <v-btn @click="decrementar" icon="mdi-minus" size="large"></v-btn>
        <v-btn @click="aumentar" icon="mdi-plus" size="large"></v-btn>
      </div>
</template>

<script setup></script>