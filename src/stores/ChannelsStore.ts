import { defineStore } from 'pinia';

export const useChannelsStore = defineStore('ChannelsStore', {
  state: () => {
    return {
      channels: [],
    };
  },

  getters: {
    channelsCount: (state) => state.channels.length,
  },
});
