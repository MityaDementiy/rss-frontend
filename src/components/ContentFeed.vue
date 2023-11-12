<script setup lang="ts">
import { useTranslation } from 'i18next-vue';
import { useChannelsStore } from '@/stores/ChannelsStore';

const channelsStore = useChannelsStore();

enum TextKeys {
  NoSubscriptionsPlaceholder = 'contentFeed.noSubscriptions',
  PendingFeedFunctionalityPlaceholder = 'contentFeed.pendingFunctionality',
  FeedSectionTitle = 'contentFeed.feedSectionTitle',
}
const { t } = useTranslation();
</script>

<template>
  <div>
    <h2 class='feedHeader'>{{ t(TextKeys.FeedSectionTitle) }}</h2>
    <div 
      v-if='channelsStore.channelsCount'
    >
      {{ t(TextKeys.PendingFeedFunctionalityPlaceholder) }}
    </div>
    <div v-else>{{ t(TextKeys.NoSubscriptionsPlaceholder) }}</div>
  </div>
</template>

<style scoped>
.feedHeader {
  margin-bottom: 0.4rem;
}
</style>
