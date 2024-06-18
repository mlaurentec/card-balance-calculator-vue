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

<script setup>

import { ref, computed } from 'vue';
const saldoFormateado = computed(() => saldo.value.toFixed(2));
const decrementar = () => {
  let nuevo_valor = saldo.value - tarifa;
  saldo.value = parseFloat(nuevo_valor.toFixed(2));
}

const aumentar = () => {
  let nuevo_valor = saldo.value + tarifa;
  saldo.value = parseFloat(nuevo_valor.toFixed(2));
}

const saldo = ref(0.00);

const tarifa = 1.50;

let fechaActual = new Date()

const calcularDias = () => {
  let fechaActual = new Date();
  let fechaFinal = new Date(fechaActual);
  let numeroDeDias = Math.floor(saldo.value / 3);
  let diasAgregados = 0;

  const daysOfWeek = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves:4,
    viernes: 5,
    sabado: 6,
    domingo: 0

  }


  while (diasAgregados < numeroDeDias) {
        fechaFinal.setDate(fechaFinal.getDate() + 1);
        const diaDeLaSemana = fechaFinal.getDay();

        // Evitar sábados (6) y domingos (0)
        if (diaDeLaSemana !== daysOfWeek.domingo && diaDeLaSemana !== daysOfWeek.sabado) {
            diasAgregados++;
        }
    }

  
  let dia = fechaFinal.getDate();
  let mes = fechaFinal.getMonth() + 1; // Los meses empiezan desde 0
  let anio = fechaFinal.getFullYear();

   return `La fecha máxima para recargar es ${dia}/${mes}/${anio}`
};

</script>

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
