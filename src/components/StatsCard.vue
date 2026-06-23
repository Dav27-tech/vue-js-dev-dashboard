<script setup>
defineProps({
  title: String,
  value: Number,
});
</script>

<template>
  <div class="stats-card">
    <h3>{{ value }}</h3>
    <p>{{ title }}</p>
  </div>
</template>
