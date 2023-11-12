<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import SubscriptionForm from './components/SubscriptionForm.vue';
import ContentFeed from './components/ContentFeed.vue';

enum TextKeys {
  HeaderTitle = 'header.title',
}

const { t } = useTranslation();
</script>

<template>
  <header>
    <h1 class='header'>{{ t(TextKeys.HeaderTitle) }}</h1>
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
