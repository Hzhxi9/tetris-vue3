<script setup lang="ts">
import Game from './components/Game.vue'
import { startGame } from './game';

function start() {
  startGame()
}
</script>

<template>
  <div class="root">
    <div>
      自己
      <Game type="self"></Game>
    </div>

    <div>
      对手
      <Game type="rival"></Game>
    </div>

    <button @click="start">startGame</button>
  </div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.root{
  display: flex
}
</style>
