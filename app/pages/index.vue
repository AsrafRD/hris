<script setup>
const { isLoggedIn } = useAuth()

onMounted(() => {
  if (isLoggedIn.value) {
    navigateTo('/dashboard')
  } else {
    navigateTo('/login')
  }
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 bg-white">
    <div class="text-center">
      <div class="spinner-grow text-primary mb-3" role="status"></div>
      <p class="text-muted small fw-bold">MEMUAT SISTEM...</p>
    </div>
  </div>
</template>
