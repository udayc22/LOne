<template>
  <ChatSidebar />

  <ChatMain />
</template>

<script setup>
import ChatSidebar from "~~/components/Chat/ChatSidebar.vue";
import ChatMain from "~~/components/Chat/Chatmain.vue";

onMounted(() => {
  // THIS SCRIPT REQUIRED FOR PREVENT For Dark Mode
  // localStorage.getItem("dark-mode") === "dark"
  //  && document.documentElement.classList.add("dark");
});

// components: {
//   Chat;
// }
</script>
