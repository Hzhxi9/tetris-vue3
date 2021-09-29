<script setup lang="ts">
import Box from './Box.vue';
import { reactive } from 'vue';
import { gameRow, gameCol, initSelfGame, initRivalGame } from '../game';

const map = reactive([]);
const props = defineProps(["type"])

if(props.type === 'self') initSelfGame(map)
else if(props.type === 'rival') initRivalGame(map)
</script>
<template>
    <div>
        <div class="row" v-for="row in gameRow" :key="row">
            <div v-for="col in gameCol" :key="col">
                <Box :type="map[row - 1][col - 1]"></Box>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: flex;
}
.game {
    margin: 0 15px;
}
</style>
