import { test, expect } from 'vitest';
import { createPinia } from 'pinia';
import i18next from 'i18next';

import { useChannelsStore } from '@/stores/ChannelsStore';

test('ChannelsStore', () => {
  const pinia = createPinia();
  const store = useChannelsStore(pinia);

  // Test initial state
  expect(store.channels).toEqual([]);
  expect(store.errors).toEqual([]);
  expect(store.channelsCount).toBe(0);
  expect(store.errorsCount).toBe(0);

  // Test addChannel action
  store.addChannel('channel1');
  expect(store.channels).toEqual(['channel1']);
  expect(store.errors).toEqual([]);
  expect(store.channelsCount).toBe(1);
  expect(store.errorsCount).toBe(0);

  // Test addChannel action when channel already exists
  store.addChannel('channel1');
  expect(store.channels).toEqual(['channel1']);
  expect(store.errors)
    .toEqual([i18next.t('formErrors.channelAlreadySubscribed')]);
  expect(store.channelsCount).toBe(1);
  expect(store.errorsCount).toBe(1);

  // Test clearErrors action
  store.clearErrors();
  expect(store.errors).toEqual([]);
  expect(store.errorsCount).toBe(0);
});
