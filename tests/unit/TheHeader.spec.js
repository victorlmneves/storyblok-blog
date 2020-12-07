import { mount } from '@vue/test-utils'
import TheHeader from '@/components/Base/TheHeader.vue'

describe("TheHeader", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(TheHeader, {
      stubs: {
        NuxtLink: true
        // Any other component that you want stubbed
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
