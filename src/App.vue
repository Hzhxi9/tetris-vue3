<script setup lang="ts">
import Game from './components/Game.vue'
import { startGame } from './game';

function start(){
  startGame()
}
</script>

<template>
  <Game />
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}

</style>
