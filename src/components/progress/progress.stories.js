import  progress  from "./progress.vue"

export default {
    title: 'progress',
    component: progress,
    argTypes: {
        onFinish: {
            action: "onFinish",
            description: "Some desc"
            // control : {type: 'text'}
        }
    }
}

const template = (args) => ({
    components: {xProgress : progress},
    data(){
        return { args }
    },
    template: `
    <x-progress @onFinish="args.onFinish"/>
    `
})

export const Default = template.bind({})

// Default.args = {
//     hoverText: "Unfollow"
// }
