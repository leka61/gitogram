import { mount } from '@vue/test-utils'
import issues from '../../src/components/issues/issues.vue'

describe('issues component', () => {
    it('is event emits', async() => {
        const wrapper = mount(issues, {
          propsData: {
              issues: []
          }
        })
        wrapper.find('.toggler button').trigger('click')
        
        expect(wrapper.emitted().loadI.length).toBe(1)
    })
    it('event doesnt emits if issues doesnt empty', async() => {
        const wrapper = mount(issues, {
            propsData: {
                issues: [
                    {
                        body: "1s",
                        user: {
                            login: "adgs"
                        }
                }
            ]
            }
        })
        wrapper.find('.toggler button').trigger('click')
        expect(wrapper.emitted().loadI).toBeUndefined()
    })
})