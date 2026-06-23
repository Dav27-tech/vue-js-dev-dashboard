<script setup>
import { ref, computed } from "vue";

import ProfileCard from "./components/ProfileCard.vue";
import StatsCard from "./components/StatsCard.vue";
import TechCard from "./components/TechCard.vue";

import { technologies } from "./data/technologies";

const search = ref("");

const filterTechnologies = computed(() => {
  return technologies.filter((tech) =>
    tech.name.toLowerCase().includes(search.value.toLowerCase()),
  );
});
</script>

<template>
  <div class="container">
    <header class="hero">
      <h1>Vue Developper</h1>
      <p>Building modern interfaces with vie.js</p>
    </header>

    <section class="top-section">
      <ProfileCard />

      <div class="stats-grid">
        <StatsCard title="Projects" :value="12" />

        <StatsCard title="Students" :value="150" />

        <StatsCard title="Years Experinece" :value="3" />
      </div>
    </section>

    <section class="search-section">
      <input v-model="search" type="text" placeholder="Search technology..." />
    </section>

    <section class="tech-grid">
      <TechCard
        v-for="tech in filterTechnologies"
        :key="tech.id"
        :technology="tech"
      />
    </section>
  </div>
</template>
