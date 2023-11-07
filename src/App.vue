<script setup lang="ts">
import SubscriptionForm from './components/SubscriptionForm.vue'
</script>

<template>
  <header>
    <h1 class="header">RSS Reader</h1>
  </header>

  <main>
    <SubscriptionForm />
  </main>
</template>

<style scoped>
.header {
  margin-bottom: 1rem;
}
</style>
