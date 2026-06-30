<script setup>
defineProps({
  skill: Object,
});
</script>
<template>
  <div class="skill-card">
    <h2>{{ skill.name }}</h2>
    <p>{{ skill.category }}</p>
    <span :class="skill.level">{{ skill.level }}</span>
  </div>
</template>
