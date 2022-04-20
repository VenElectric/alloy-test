<script setup lang="ts">
import states from "../static/states"
</script>

<template>
  <select>
    <option v-for="state in states" :value="state.abbreviation">{{state.name}}</option>
  </select>
</template>
