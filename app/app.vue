<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Toast Notification (Simple Implementation) -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1060"></div>
  </div>
</template>

<script setup>
// Global initialization if any
</script>

<style>
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

.transition-all {
  transition: all 0.3s ease;
}

.object-fit-cover {
  object-fit: cover;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #bbb;
}
</style>
