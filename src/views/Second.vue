<template>
    <v-container :fluid="true">
        <h1 class="text-green-darken-4">Bienvenido</h1>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
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