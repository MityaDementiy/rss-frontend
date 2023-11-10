<script setup lang="ts">
import { useChannelsStore } from '@/stores/ChannelsStore';

const channelsStore = useChannelsStore();

enum InterfaceTexts {
  NoSubscriptionsPlaceholder = 'Add a feed to get started',
  PendingFeedFunctionalityPlaceholder = 'Feed functionality is pending',
  FeedSectionTitle = 'My Feeds',
}
</script>

<template>
<div>
  <h2 class='feedHeader'>{{ InterfaceTexts.FeedSectionTitle }}</h2>
  <div v-if="channelsStore.channelsCount">{{ InterfaceTexts.PendingFeedFunctionalityPlaceholder }}</div>
  <div v-else>{{ InterfaceTexts.NoSubscriptionsPlaceholder }}</div>
</div>
</template>

<style scoped>
.feedHeader {
  margin-bottom: 0.4rem;
}
</style>
