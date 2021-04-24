import Vue from 'vue'
import Vuetify from 'vuetify'

import { mount } from '@vue/test-utils'
import Search from '~/components/app/Search.vue'

Vue.use(Vuetify)

describe('Search', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Search)
    expect(wrapper.vm).toBeTruthy()
  })
})
