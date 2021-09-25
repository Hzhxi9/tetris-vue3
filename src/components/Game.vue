<script setup lang="ts">
import Box from './Box.vue'
import { reactive } from '@vue/reactivity';

const map = reactive([])
</script>
<template>
    <div>
        <div class="row" v-for="row in 10" :key="row">
            <div v-for="col in 10" :key="col">
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
