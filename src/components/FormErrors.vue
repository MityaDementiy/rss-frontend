<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { useChannelsStore } from '@/stores/ChannelsStore';

const channelsStore = useChannelsStore();

enum TextKeys {
  GotItButton = 'formErrors.gotItButton',
}
const { t } = useTranslation();
</script>

<template>
  <div class='formErrors' v-if='!!channelsStore.errorsCount'>
    <ul class='errorsList'>
      <li v-for='error in channelsStore.errors' :key='error'>{{ error }}</li>
    </ul>
    <button 
      @click='channelsStore.clearErrors' 
      class='errorClearButton'
    >
      {{ t(TextKeys.GotItButton) }}
    </button>
  </div>
</template>

<style scoped>
.formErrors {
  position: absolute;
  top: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;
}

.errorsList {
  list-style: none;
  margin: 0;
  padding: 0;

  font-size: 0.8rem;
  color: red;
}
</style>
