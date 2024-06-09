<script setup>
import { ref, computed } from 'vue';
import AppBar from './components/AppBar.vue';

const saldo = ref(0.00);

const tarifa = 1.50;
const inputValue = ref(0);

const decrementar = () => {
  let nuevo_valor = saldo.value - tarifa;
  saldo.value = parseFloat(nuevo_valor.toFixed(2));
}

const aumentar = () => {
  let nuevo_valor = saldo.value + tarifa;
  saldo.value = parseFloat(nuevo_valor.toFixed(2));
}

const saldoFormateado = computed(() => saldo.value.toFixed(2));

let fechaActual = new Date()
console.log(fechaActual);

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


const rules = [
  value => !!value || 'Requerided.',
  value => !isNaN(value) || 'Debe ser un número',
  value => (value || '').length <= 5 || 'Max 5 characters',
]

</script>

<template>
  <v-app>
    <AppBar/>
  <v-main>

    <v-alert
    v-if="saldo == 0"
    class="alerta"
    
    title="Urgente"
    type="error"
  >{{calcularDias()}}</v-alert>

  <v-alert
    v-if="saldo > 3"
    class="alerta"
    
    title="Nota"
    type="info"
  >{{calcularDias()}}</v-alert>

  <v-alert
    v-if="saldo <= 3 && saldo >0"
    class="alerta"
    
    title="Nota"
    type="warning"
  >{{calcularDias()}}</v-alert>

  <v-row>
      <v-col cols="12">
        <v-text-field

        :rules="rules"
        v-model = "saldo"
        hide-details="auto"
        label="Coloca tu Saldo"
        >
        </v-text-field>

      </v-col>
    
    </v-row>

 

  
  </v-main>  

    </v-app>
</template>

<style scoped>
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
