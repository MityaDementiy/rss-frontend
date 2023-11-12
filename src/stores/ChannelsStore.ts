import { defineStore } from 'pinia';
import i18next from 'i18next';

enum TextKeys {
  ChannelAlreadySubscribed = 'formErrors.channelAlreadySubscribed',
  StoreName = 'ChannelsStore',
}

export const useChannelsStore = defineStore(TextKeys.StoreName, {
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
        this.errors.push(i18next.t(TextKeys.ChannelAlreadySubscribed));
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
