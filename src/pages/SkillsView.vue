<script setup>
// Import the page components
import { ref, computed } from "vue";
import SkillCard from "../components/SkillCard.vue";
// Import the skills list
import { skills } from "../data/skills";
// Import the CSS style
import "../styles/SkillsView.css";

const searchSkill = ref("");

const selectedSkill = ref("");

const skillsList = ref([...skills]);

const filteredSkills = computed(() => {
  const query = searchSkill.value.toLowerCase();
  let all_skills = false;
  if (!selectedSkill.value && !searchSkill.value) {
    return skillsList.value;
  }

  if (!selectedSkill.value) {
    all_skills = true;
  }

  return skillsList.value.filter(
    (skill) =>
      (skill.category.toLowerCase().includes(query) ||
        skill.name.toLowerCase().includes(query) ||
        skill.level.toLowerCase().includes(query)) &&
      (skill.category === selectedSkill.value || all_skills),
  );
});
</script>
<template>
  <header>
    <h1>Skills</h1>
    <p>List of your skills</p>
  </header>
  <section class="search-section">
    <input type="text" v-model="searchSkill" placeholder="Search Skill ..." />
    <select v-model="selectedSkill">
      <option value="">All Categories</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Database">Database</option>
      <option value="DevOps">DevOps</option>
    </select>
  </section>

  <section class="skill-grid">
    <SkillCard v-for="skill in filteredSkills" :key="skill.id" :skill="skill" />
    <p v-if="filteredSkills.length === 0">No skills found</p>
  </section>
</template>
