<script setup lang="ts">
import { ref } from 'vue';
import { useChannelsStore } from '@/stores/ChannelsStore';

const channelsStore = useChannelsStore();
const newChannelUrl = ref('');

const submitChannel = (event: Event) => {
  event.preventDefault();
  channelsStore.addChannel(newChannelUrl.value);
  newChannelUrl.value = '';
};

enum InterfaceTexts {
  Placeholder = 'Enter RSS feed URL',
  AddButton = 'Add Feed',
  GotItButton = 'Got It!',
}
</script>

<template>
  <div class='formWrapper'>
    <form class='form' @submit='submitChannel'>
      <input 
        type='url' 
        v-model='newChannelUrl' 
        :disabled='!!channelsStore.errorsCount'  
        :placeholder='InterfaceTexts.Placeholder' 
      />
      <button 
        type='submit' 
        :disabled='!!channelsStore.errorsCount'
      >
        {{ InterfaceTexts.AddButton }}
      </button>
    </form>
    <div class='formErrors' v-if='!!channelsStore.errorsCount'>
      <ul class='errorsList'>
        <li v-for='error in channelsStore.errors' :key='error'>{{ error }}</li>
      </ul>
      <button 
        @click='channelsStore.clearErrors' 
        class='errorClearButton'
      >
        {{ InterfaceTexts.GotItButton }}
      </button>
    </div>
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
