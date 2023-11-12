<script setup lang="ts">
import { ref } from 'vue';
import { useTranslation } from 'i18next-vue';

import { useChannelsStore } from '@/stores/ChannelsStore';
import FormErrors from './FormErrors.vue';

const channelsStore = useChannelsStore();
const newChannelUrl = ref('');

const submitChannel = (event: Event) => {
  event.preventDefault();
  channelsStore.addChannel(newChannelUrl.value);
  newChannelUrl.value = '';
};

enum TextKeys {
  Placeholder = 'subscriptionForm.inputPlaceholder',
  SubmitButton = 'subscriptionForm.submitButton',
}

const { t } = useTranslation();
</script>

<template>
  <div class='formWrapper'>
    <form class='form' @submit='submitChannel'>
      <input 
        type='url' 
        v-model='newChannelUrl' 
        :disabled='!!channelsStore.errorsCount'  
        :placeholder='t(TextKeys.Placeholder)'
      />
      <button 
        type='submit' 
        :disabled='!!channelsStore.errorsCount'
      >
        {{ t(TextKeys.SubmitButton) }}
      </button>
    </form>
    <FormErrors />
  </div>
</template>

<style scoped>
.formWrapper {
  position: relative;

  display: flex;
  flex-direction: column;
}
.form {
  display: flex;
  gap: 1rem;

  margin-bottom: 1.6rem;
}
</style>
