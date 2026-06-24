<script setup>
defineProps({
  project: Object,
});
const emit = defineEmits(["favorite"]);
</script>

<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.tech }}</p>
  </div>

  <button
    @click="emit('favorite', project.id)"
    :class="{ active: project.favorite }"
  >
    Favorite
  </button>
</template>
