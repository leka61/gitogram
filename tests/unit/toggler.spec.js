import { shallowMount } from '@vue/test-utils'
import toggle from '../../src/components/toggler/toggler.vue'

describe('Toggler component', () => {
    it('text changed after click', async() => {
        const wrapper = shallowMount(toggle)
        // console.log(wrapper.find('.text').text())
        await wrapper.find('.button').trigger('click')
        // console.log(wrapper.find('.text').text())
        expect(wrapper.find('.text').text()).toBe("Hide issues")
    })
    it('after click button has active class', async() => {
        const wrapper = shallowMount(toggle)
        const button = wrapper.find('.button')
        await button.trigger('click')
        expect(wrapper.find('.active').exists()).toBe(true)
    })
})