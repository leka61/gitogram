import  button  from "./button.vue"

export default {
    title: 'button',
    component: button,
    argTypes: {
        hoverText: {
            type: 'text'
        },
        btnText: {
            type: 'text'
        }
    }
}

const template = (args) => ({
    components: {xButton : button},
    data(){
        return { args }
    },
    template: `
    <x-button v-bind="args"></x-button>
    `
})

export const Default = template.bind({})

Default.args = {
    hoverText: "Unfollow",
    btnText: "Follow"
}
