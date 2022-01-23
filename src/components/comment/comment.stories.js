import comment from "./comment.vue"

export default {
    title: "comment",
    components : { comment },
    argTypes:{
        username:{
            type:'text'
        },
        text:{
            type:'text'
        }
    }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        comment
    },
    data(){
        return {
            args
        }  
    },
    template:`<comment
    :username="args.username"
    :text="args.text"
    />`
})

defaultView.args = {
    username: 'User Name',
    text: 'user comment'
}

