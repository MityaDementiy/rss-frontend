import { defineStore } from 'pinia';

enum Errors {
  ChannelAlreadySubscribed = 'This channel is already subscribed',
}

export const useChannelsStore = defineStore('ChannelsStore', {
  state: (): { channels: Array<string>, errors: Array<string> } => ({
    channels: [],
    errors: [],
  }),

  actions: {
    clearErrors() {
      this.errors = [];
    },
    addChannel(channel: string) {
      if (this.channels.includes(channel)) {
        this.errors.push(Errors.ChannelAlreadySubscribed);
        return;
      }

      this.channels.push(channel);
    },
  },

  getters: {
    channelsCount: (state) => state.channels.length,
    errorsCount: (state) => state.errors.length,
  },
});
