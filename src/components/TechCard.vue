<script setup>
defineProps({
  technology: Object,
});
</script>

<template>
  <div class="tech-card">
    <h3>{{ technology.name }}</h3>
    <span>{{ technology.level }}</span>
  </div>
</template>
