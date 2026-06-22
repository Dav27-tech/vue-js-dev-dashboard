<script setup>
const developer = {
  name: "AMANI MUSAFIRI David",
  role: "Full Stack Developper",
  country: "Republic Democratic of the Congo",
};
</script>

<template>
  <div>
    <img
      src="https://litslink.com/wp-content/uploads/2024/06/8-1024x682.jpg"
      alt="Profile picture"
    />

    <h2>{{ developer.name }}</h2>
    <p>{{ developer.role }}</p>
    <span>{{ developper.country }}</span>
  </div>
</template>
