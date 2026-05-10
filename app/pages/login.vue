<template>
  <div class="login-container d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div class="login-card shadow-lg bg-white rounded-4 overflow-hidden d-flex flex-column flex-md-row">
      <!-- Left side: Illustration/Info -->
      <div class="login-brand p-5 bg-primary text-white d-none d-md-flex flex-column justify-content-center align-items-center text-center">
        <div class="brand-icon mb-4">
          <i class="bi bi-people-fill display-1"></i>
        </div>
        <h2 class="fw-bold mb-3">SDM Digital</h2>
        <p class="lead">Sistem Pengelolaan Data Pegawai Modern & Terintegrasi</p>
        <div class="mt-4 opacity-75">
          <small>&copy; 2026 HR Tech Solution</small>
        </div>
      </div>

      <!-- Right side: Form -->
      <div class="login-form p-5 bg-white">
        <div class="mb-4 text-center text-md-start">
          <h3 class="fw-bold text-dark">Selamat Datang</h3>
          <p class="text-muted">Masuk untuk mengelola data pegawai</p>
        </div>

        <form @submit.prevent="handleLogin">
          <div v-if="error" class="alert alert-danger d-flex align-items-center" role="alert">
            <i class="bi bi-exclamation-triangle-fill me-2"></i>
            <div>{{ error }}</div>
          </div>

          <!-- Username/Email/Phone -->
          <div class="mb-3">
            <label class="form-label fw-semibold">Username / Email / No. HP</label>
            <div class="input-group">
              <span class="input-group-text bg-light border-end-0">
                <i class="bi bi-person text-primary"></i>
              </span>
              <input 
                v-model="form.identitas" 
                type="text" 
                class="form-control bg-light border-start-0" 
                placeholder="Masukkan identitas login"
                required
              >
            </div>
          </div>

          <!-- Password -->
          <div class="mb-3">
            <label class="form-label fw-semibold">Kata Sandi</label>
            <div class="input-group">
              <span class="input-group-text bg-light border-end-0">
                <i class="bi bi-lock text-primary"></i>
              </span>
              <input 
                v-model="form.kata_sandi" 
                :type="showPassword ? 'text' : 'password'" 
                class="form-control bg-light border-start-0 border-end-0" 
                placeholder="Masukkan kata sandi"
                required
              >
              <button 
                class="input-group-text bg-light border-start-0" 
                type="button"
                @click="showPassword = !showPassword"
              >
                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" class="text-muted"></i>
              </button>
            </div>
          </div>

          <!-- Captcha -->
          <div class="mb-3">
            <label class="form-label fw-semibold">Captcha</label>
            <div class="d-flex gap-2">
              <div 
                class="captcha-img-container border rounded overflow-hidden bg-light d-flex align-items-center justify-content-center" 
                v-html="captchaSvg"
                @click="refreshCaptcha"
                title="Klik untuk ganti captcha"
              >
              </div>
              <button type="button" class="btn btn-outline-secondary btn-sm" @click="refreshCaptcha">
                <i class="bi bi-arrow-clockwise"></i>
              </button>
              <input 
                v-model="form.captcha" 
                type="text" 
                class="form-control bg-light" 
                placeholder="Kode"
                required
                maxlength="4"
              >
            </div>
            <small class="text-muted mt-1 d-block">Masukkan angka yang muncul di atas</small>
          </div>

          <!-- Remember Me -->
          <div class="mb-4 d-flex justify-content-between align-items-center">
            <div class="form-check">
              <input v-model="form.ingat_saya" class="form-check-input" type="checkbox" id="rememberMe">
              <label class="form-check-label text-muted" for="rememberMe">
                Ingat saya
              </label>
            </div>
            <a href="#" class="text-decoration-none text-primary small fw-semibold">Lupa kata sandi?</a>
          </div>

          <!-- Submit -->
          <button 
            type="submit" 
            class="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm"
            :disabled="loading"
          >
            <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            MASUK KE SISTEM
          </button>
        </form>

        <div class="mt-5 pt-3 text-center d-md-none border-top">
          <small class="text-muted">&copy; 2026 HR Tech Solution</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: ['guest']
})

const { login, getCaptcha, loading, error } = useAuth()
const captchaSvg = ref('')
const showPassword = ref(false)

const form = reactive({
  identitas: '',
  kata_sandi: '',
  captcha: '',
  ingat_saya: false
})

onMounted(async () => {
  await refreshCaptcha()
})

const refreshCaptcha = async () => {
  captchaSvg.value = await getCaptcha()
}

const handleLogin = async () => {
  try {
    await login({ ...form })
    navigateTo('/dashboard')
  } catch (err) {
    await refreshCaptcha()
    form.captcha = ''
  }
}
</script>

<style scoped>
.login-container {
  background-color: #f8f9fa;
  font-family: 'Inter', sans-serif;
}

.login-card {
  max-width: 900px;
  width: 100%;
  min-height: 550px;
  border: none;
}

.login-brand {
  width: 400px;
  background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
}

.login-form {
  flex: 1;
}

.captcha-img-container {
  min-width: 120px;
  height: 40px;
  cursor: pointer;
}

.captcha-img-container :deep(svg) {
  width: 100%;
  height: 100%;
}

.input-group-text {
  border-color: #e9ecef;
}

.form-control:focus {
  box-shadow: none;
  border-color: #0d6efd;
}

.btn-primary {
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
}

@media (max-width: 767.98px) {
  .login-card {
    margin: 1rem;
    min-height: auto;
  }
}
</style>
