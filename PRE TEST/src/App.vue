<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Sidebar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
  </div>
  <div class="content">
    <header class="fixed-header">
      <h1 style="color: aliceblue;">BNI PRE-TEST</h1>
      <p style="color: aliceblue;">This Dashboard was made as a pre - test project for BNI applicants</p>
    </header>
    <RouterView class="scroll-content" />
    <footer class="fixed-footer">
      <p style="color: aliceblue;">&copy; 2023 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>


