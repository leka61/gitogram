import avatar from "./avatar.vue"

export default {
    title: "avatar",
    components : { avatar }
}

export const defaultView = ()=>({
    components:{
        avatar
    },
    template:`<avatar 
    size="l"
    avatar="https://picsum.photos/200/300"
    />`
})

