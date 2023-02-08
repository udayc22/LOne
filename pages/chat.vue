<template>
  <Chat></Chat>
</template>

<script setup>
import Chat from "@/components/Chat.vue";

onMounted(() => {
  // THIS SCRIPT REQUIRED FOR PREVENT For Dark Mode
  // localStorage.getItem("dark-mode") === "dark"
  //  && document.documentElement.classList.add("dark");
});

// components: {
//   Chat;
// }
</script>
