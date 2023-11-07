import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SubscriptionForm from '../SubscriptionForm.vue'

describe('SubscriptionForm', () => {
  it('renders properly', () => {
    const wrapper = mount(SubscriptionForm)
    expect(wrapper.text()).toContain('Add Feed')
  })
})
