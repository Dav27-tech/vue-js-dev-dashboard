<script setup>
// Import the Vue.js functions
import { ref, computed } from "vue";
// Import the components
import ProjectCard from "../components/ProjectCard.vue";
// Import the dataset
import { projects } from "../data/projects.js";
import "../styles/App.css";

const selectedTech = ref("");

const projectList = ref([...projects]);

const filteredProjects = computed(() => {
  if (!selectedTech.value) {
    return projectList.value;
  }

  return projectList.value.filter(
    (project) => project.tech === selectedTech.value,
  );
});

const toggleFavorite = (id) => {
  const project = projectList.value.find((item) => item.id === id);

  project.favorite = !project.favorite;
};
</script>

<template>
  <section>
    <h1>Projects</h1>

    <select v-model="selectedTech">
      <option value="">All technologies</option>

      <option value="Vue.js">Vue.js</option>

      <option value="React.js">React.js</option>

      <option value="Node.js">Node.js</option>

      <option value="PostgreSQL">PostgreSQL</option>
    </select>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @favorite="toggleFavorite"
      />
    </div>
  </section>
</template>
