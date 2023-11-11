import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { useChannelsStore } from '@/stores/ChannelsStore';
import SubscriptionForm from '@/components/SubscriptionForm.vue';
import { test, expect } from 'vitest';

test('adds a channel on form submit', async () => {
  const pinia = createPinia();
  const store = useChannelsStore(pinia);
  
  const wrapper = mount(SubscriptionForm, {
    global: {
      plugins: [pinia],
    },
  });

  await wrapper.find('input').setValue('channel1');
  await wrapper.find('form').trigger('submit');

  expect(store.channelsCount).toBe(1);
  expect(store.channels[0]).toBe('channel1');
})

test('shows an error if a channel already exists', async () => {
  const pinia = createPinia();
  const store = useChannelsStore(pinia);
  store.addChannel('channel1');

  const wrapper = mount(SubscriptionForm, {
    global: {
      plugins: [pinia],
    },
  });

  await wrapper.find('input').setValue('channel1');
  await wrapper.find('form').trigger('submit');

  expect(store.errorsCount).toBe(1);
})

test('clears errors when the "Got It!" button is clicked', async () => {
  const pinia = createPinia();
  const store = useChannelsStore(pinia);
  store.addChannel('channel1');

  const wrapper = mount(SubscriptionForm, {
    global: {
      plugins: [pinia],
    },
  });

  await wrapper.find('input').setValue('channel1');
  await wrapper.find('form').trigger('submit');
  await wrapper.find('.errorClearButton').trigger('click');

  expect(store.errorsCount).toBe(0);
});
