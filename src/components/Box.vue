<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    default: 0,
    type: Number,
  },
});
const typeToColorMap: any = {
  [0]: "gray",
  [1]: "red",
};
const color = computed(() => typeToColorMap[props.type]);
</script>

<template>
  <div class="box">{{ type }}</div>
</template>

<style scoped>
.box {
  width: 20px;
  height: 20px;
  background: v-bind(color);
  margin: 2px;
}
</style>
