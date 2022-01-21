import comment from "./comment.vue"

export default {
    title: "comment",
    components : { comment }
}

export const defaultView = ()=>({
    components:{
        comment
    },
    template:`<comment
    username="User Name"
    text="Comment text"
    />`
})

