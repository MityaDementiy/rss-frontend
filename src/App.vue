<script setup lang="ts">
import SubscriptionForm from './components/SubscriptionForm.vue';
import ContentFeed from './components/ContentFeed.vue';
</script>

<template>
  <header>
    <h1 class='header'>RSS Reader</h1>
  </header>

  <main>
    <SubscriptionForm />
    <ContentFeed />
  </main>
</template>

<style scoped>
.header {
  margin-bottom: 1.8rem;
}
</style>
